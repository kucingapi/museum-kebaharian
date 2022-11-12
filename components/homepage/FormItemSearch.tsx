import {
  Fragment,
  FC,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';
import { Button } from '../../components/Button';
import { useRouter } from 'next/router';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { ApiContext } from '../../contexts/ApiContext';
import { Item } from '../../api/interface/item/Item';

export const FormItemSearch: FC = () => {
  const router = useRouter();
  const apiContext = useContext(ApiContext);
  console.log(apiContext?.items);
  const items = apiContext?.items || [];

  const [selected, setSelected] = useState(items[0]);
  const [query, setQuery] = useState('');

  return (
    <div className="flex flex-col gap-5">
      <InputMuseumCode
        selected={selected}
        setSelected={setSelected}
        query={query}
        setQuery={setQuery}
      />
      <Button
        onClick={() => {
          router.push(`item/${selected.kode_barang}`);
        }}
        className="bg-neutral w-fit self-end px-8"
      >
        Cek Sejarahnya
      </Button>
    </div>
  );
};

interface InputMuseumInterface {
  selected: Item;
  setSelected: Dispatch<SetStateAction<Item>>;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

const InputMuseumCode: FC<InputMuseumInterface> = (props) => {
  const apiContext = useContext(ApiContext);
  console.log(apiContext?.items);
  const items = apiContext?.items || [];

  const { selected, setSelected, query, setQuery } = props;

  const filteredPeople =
    query === ''
      ? items
      : items.filter((items) =>
          items.kode_barang
            .toLowerCase()
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
          <Combobox.Input
            className="input input-info w-full bg-white text-black rounded-2xl"
            displayValue={(items: Item) => items.kode_barang}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className="absolute mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-0 pl-0 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredPeople.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredPeople.map((items) => (
                <Combobox.Option
                  key={items.id}
                  className={({ active }) =>
                    `list-none relative cursor-default select-none py-2 px-5 ${
                      active ? 'bg-accent text-gray-900' : 'text-gray-900'
                    }`
                  }
                  value={items}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {items.kode_barang}
                      </span>
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};

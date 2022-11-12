import { useRouter } from 'next/router';
import { FC } from 'react';
import { API } from '../../api';
import { Item } from '../../api/interface/item/Item';
import boat from '/public/assets/phinisi.webp';

interface Params {
  params: id;
}

interface id {
  id: string;
}

interface ItemStaticProp {
  response: Item[];
}

export async function getStaticProps({ params }: Params) {
  const { id } = params;
  const res = await API.getItemByCode(id);

  return {
    props: { response: res.data.data },
    revalidate: 86_400,
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      // Object variant:
      { params: { id: 'pp-01-12' } },
    ],
    fallback: true,
  };
}


const ItemByCode: FC<ItemStaticProp> = (props) => {
  const router = useRouter();
  const item = props.response[0];

  return (
    <>
      <div className="px-28 py-20">
        <div className="flex md:flex-row flex-col gap-5">
          <img
            className="md:w-7/12 w-full object-cover rounded-2xl"
            src={item.gambar_barang.original_url}
            alt="boat item"
          />
          <div className="md:w-5/12 w-full flex flex-col gap-4">
            <img
              className="object-cover rounded-2xl"
              src={item.gambar_barang.original_url}
              alt="boat item"
            />
            <img
              className="object-cover rounded-2xl"
              src={item.gambar_barang.original_url}
              alt="boat item"
            />
          </div>
        </div>
      </div>
      <article className="prose bg-slate-100 max-w-full px-28 py-10">
        <h1 className="mb-0">{item.nama_barang}</h1>
        <div className="divider my-2"></div>
        <h4 className="font-normal">{item.deskripsi_barang}</h4>
      </article>
    </>
  );
};

export default ItemByCode;

import { Dispatch, FC, SetStateAction } from 'react';

interface ModalInterface {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}

export const Modal: FC<ModalInterface> = (props) => {
  const visible = 'visible opacity-100 pointer-events-auto';

  return (
    <div className={`modal ${props.modal ? visible : ''}`}>
      <div className="modal-box p">
        {props.children}
        <div className="modal-action">
          <label onClick={() => props.setModal(!props.modal)} htmlFor="my-modal" className="btn">
            Close
          </label>
        </div>
      </div>
    </div>
  );
};

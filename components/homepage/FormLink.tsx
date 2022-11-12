import { FC, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { API } from '../../api';
import axios from 'axios';
import { axiosInstance } from '../../api/axios';
import { getDataFromAxios } from '../../functions/getDataFromAxios';
import { Modal } from '../Modal';

export const FormLink: FC = () => {
  const [modal, setModal] = useState(false);
  const [responseState, setResponseState] = useState({
    status: '',
    message: '',
  });
  const formik = useFormik({
    initialValues: {
      link: '',
    },

    validationSchema: Yup.object({
      link: Yup.string()
        .min(15, 'Minimal 15 huruf untuk mengsubmit link')
        .required('Required'),
    }),

    onSubmit: async (values) => {
      try {
        const response = await API.addLink({ link: values.link });
        setResponseState({
          status: response.data.status,
          message: response.data.message,
        });
        setModal(!modal);
      } catch (error) {
        setResponseState({
          status: 'Error',
          message: 'Something Went wrong',
        });
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-7">
      <Modal modal={modal} setModal={setModal}>
        <article className="prose text-slate-100">
          <h2 className="text-slate-100 uppercase">{responseState.status}</h2>
          <h3 className="font-normal text-slate-100">
            {responseState.message}
          </h3>
        </article>
      </Modal>
      <input
        id="link"
        name="link"
        type="text"
        placeholder="Link URL"
        className="input input-info w-full "
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.link}
      />
      <button
        className="text-base gap-2 normal-case btn font-bold text-primary bg-slate-100 rounded-xl hover:bg-white"
        type="submit"
      >
        Kirim
      </button>
    </form>
  );
};

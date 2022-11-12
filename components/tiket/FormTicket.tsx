import {
  FormikBag,
  FormikComputedProps,
  FormikConfig,
  FormikValues,
  useFormik,
} from 'formik';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { FC, useState } from 'react';
import { Button } from '../Button';
import * as Yup from 'yup';
import { axiosInstance } from '../../api/axios';
import fs from 'fs';
import { validateConfig } from 'next/dist/server/config-shared';
import { Modal } from '../Modal';

export const FormTicket: FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const moveY = useTransform(scrollYProgress, [0, 1], [-250, -700]);

  const currencyFormater = Intl.NumberFormat('en', {
    notation: 'standard',
    currency: 'IDR',
  });

  const [modal, setModal] = useState(false);
  const [responseState, setResponseState] = useState({
    status: '',
    message: '',
  });

  const [payment, setPayment] = useState<any>(null);

  const formik = useFormik({
    initialValues: {
      email: '',
      many_ticket: '0',
      date: '',
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email()
        .min(5, 'Minimal 5 huruf untuk mengsubmit link')
        .required('Required'),
      many_ticket: Yup.number().required('Required'),
      date: Yup.date().required('Required'),
    }),

    onSubmit: async (values) => {
      const formData = new FormData();

      const date = new Date(values.date);

      const yyyy = date.getFullYear();
      let mm: number | string = date.getMonth() + 1; // Months start at 0!
      let dd: number | string = date.getDate();

      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;

      const formattedToday = dd + '/' + mm + '/' + yyyy;

      formData.append('email', values.email);
      formData.append('jumlah_tiket', values.many_ticket);
      formData.append('tanggal_pemesanan', formattedToday);
      formData.append('bukti_pembayaran', payment, payment.name);
      try {
        const response = await axiosInstance
          .post('tickets/order', formData)
        setResponseState({
          status: "success",
          message: "pesanan tiket anda sudah terkirim silahkan cek email anda",
        });
        setModal(!modal);
      } catch (error) {
        setResponseState({
          status: "error",
          message: "terjadi sebuah kesalahan",
        });
        setModal(!modal);
      }
    },
  });

  return (
    <>
      <Modal modal={modal} setModal={setModal}>
        <article className="prose text-slate-100">
          <h2 className="text-slate-100 uppercase">{responseState.status}</h2>
          <h3 className="font-normal text-slate-100">
            {responseState.message}
          </h3>
        </article>
      </Modal>
      <motion.div
        style={{ translateY: moveY }}
        className="card absolute right-0 rounded-3xl w-full md:w-1/2 bg-white/60 flex flex-col items-center px-16 py-12 backdrop-blur-sm md:mr-9"
      >
        <h1 className="text-3xl font-bold text-primary">Beli Tiket Museum</h1>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col w-full mt-9 gap-4"
        >
          <TextField
            id="email"
            formik={formik}
            type="text"
            placeholder="Email"
          />
          <TextField
            id="many_ticket"
            formik={formik}
            type="number"
            placeholder="Jumlah Tiket"
          />
          <TextField
            id="date"
            formik={formik}
            type="date"
            placeholder="Tanggal Pemesenan tiket"
          />
          <label className="label">
            <span className="label-text-alt"></span>
            <span className="label-text-alt text-primary font-bold mr-5 drop-shadow-none">
              Nominal Total:{'  '}
              Rp.
              {currencyFormater.format(
                parseInt(formik.values.many_ticket) * 5_000
              )}
            </span>
          </label>
          <input
            id="payment_photo"
            name="payment_photo"
            type="file"
            placeholder=""
            className="w-full h-52 p-4 input input-bordered bg-slate-100 rounded-md"
            onChange={(event:any) => {
              setPayment(event.currentTarget.files[0]);
            }}
            onBlur={formik.handleBlur}
          />
          <Button type="submit" className="">
            Beli Tiket
          </Button>
        </form>
      </motion.div>
    </>
  );
};

interface textFieldProps {
  id: string;
  placeholder: String;
  type: 'text' | 'file' | 'number' | 'date';
  formik: FormikValues;
}

const TextField: FC<textFieldProps> = (props) => {
  return (
    <input
      id={props.id}
      name={props.id}
      type={props.type}
      placeholder={props.placeholder.trim()}
      className="input input-bordered input-primary w-full bg-slate-100 text-primary"
      onChange={props.formik.handleChange}
      onBlur={props.formik.handleBlur}
      value={props.formik.values[props.id]}
    />
  );
};

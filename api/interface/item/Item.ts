import { EventPhoto } from './../event/eventphoto';
export interface Item {
    id:               number;
    nama_barang:      string;
    deskripsi_barang: string;
    kode_barang:      string;
    created_at:       Date;
    updated_at:       Date;
	gambar_barang:	  EventPhoto;
    media:            EventPhoto[];
}

import { Item } from './interface/item/Item';
import { LinkBody } from './interface/link/LinkBody';
import { LinkResponse } from './interface/link/LinkResponse';
import { axiosResponse } from './interface/response';
import { Event } from './interface/event/event';
import { Get } from "./Get"
import { Post } from './Post';

const getAllEvent = () => Get<axiosResponse<Event[]>>("event")
const getAllItem = () => Get<axiosResponse<Item[]>>("barang")
const getItemByCode = (code:string) => Get<axiosResponse<Item>>(`barang/kode/${code}`)

const addLink = (body: LinkBody) => Post<axiosResponse<LinkResponse>, LinkBody>("link/submit", body)

export const API = {
	getAllEvent,
	getAllItem,
	getItemByCode,
	addLink
}
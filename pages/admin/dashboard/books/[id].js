import MyLayout from "@/pages/component/layout"
import axios from "axios";
import { useRouter } from 'next/router'
import UserLayout from "@/pages/component/userlayout";
import BookLayout from "@/pages/component/userlayout";
import SessionCheck from '../../../component/sessioncheck'
import AdminDrawer from '../../../component/admindrawer'

export default function UserProfile({ data }) {
    const router = useRouter();
    return (
        <>
            <SessionCheck />
            <MyLayout title={data.id} />
            <AdminDrawer />

            <BookLayout
                name={data.name}
                author={data.author}
                category={data.category}
                price={data.price}
            />

            <button type="button" onClick={() => router.back()}>
                Click here to go back
            </button>

        </>
    )
}

export async function getServerSideProps(context) {
    const id = context.params.id;

    const response = await axios.get('http://localhost:3000/admin/book/findbook/' + id);
    const data = await response.data;

    return { props: { data } }
}
import AddBtn from "./AddBtn";
import Pagination from "./pagination/Pagination";
import SearchBar from "../search-bar/SearchBar";
import UserList from "./user-list/User-list";
import { useEffect, useState } from "react"

const baseUrl = `http://localhost:3030/jsonstore`

export default function UserSection() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async function getUsers() {

            const response = await fetch(`${baseUrl}/users`)
            const result = await response.json();
            const users = Object.values(result)

            setUsers(users)
        })()
    }, [])

    const deleteUser = async (id) => {

        await fetch(`${baseUrl}/users/${id}`, {
            method: 'DELETE'
        })

        setUsers((prevUsers) => {
            [...prevUsers].filter((userId) => userId != id )
        } )
    }

    const showModal = () => {
        console.log('test')
    }

    return (
        <section className="card users-container">

            <SearchBar />
            <UserList
                users={users}
                onDelete={deleteUser}
            />
            <AddBtn showModal={showModal} />
            <Pagination />

        </section>
    )
}

import AddBtn from "./AddBtn";
import Pagination from "./pagination/Pagination";
import SearchBar from "../search-bar/SearchBar";
import UserList from "./user-list/User-list";
import { useEffect, useState } from "react"

const baseUrl = `http://localhost:3030/jsonstore/users`

export default function UserSection() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async function getUsers() {

            const response = await fetch(baseUrl)
            const result = await response.json();
            const users = Object.values(result)

            setUsers(users)
        })()
    }, [])

    return (
        <section className="card users-container">

            <SearchBar />
            <UserList users={users}/>
            <AddBtn />
            <Pagination />

        </section>
    )
}

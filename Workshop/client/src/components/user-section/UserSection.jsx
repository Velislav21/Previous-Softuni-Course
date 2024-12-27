import Pagination from "./pagination/Pagination";
import SearchBar from "../search-bar/SearchBar";
import UserList from "./user-list/User-list";
import { useEffect, useState } from "react";
import UserAdd from "./user-add/UserAdd";

const baseUrl = `http://localhost:3030/jsonstore`;

export default function UserSection() {

    const [users, setUsers] = useState([]);
    const [isAddUserModalShowing, setIsAddUserModalShowing] = useState(false);

    useEffect(() => {
        (async function getUsers() {

            const response = await fetch(`${baseUrl}/users`)
            const result = await response.json();
            const users = Object.values(result)

            setUsers(users)
        })();
    }, []);

    const deleteUser = async (id) => {

        await fetch(`${baseUrl}/users/${id}`, {
            method: 'DELETE'
        });

        setUsers((prevUsers) => {
            [...prevUsers].filter((userId) => userId != id)
        });
    };

    const addUserClickHandler = () => {
        setIsAddUserModalShowing(true);
    };
    const hideAddUserModal = () => {
        setIsAddUserModalShowing(false)
    }

    const addUserHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData);

        const response = await fetch(`${baseUrl}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })

        const newUser = await response.json()

        setUsers((prevUsers) => [...prevUsers, newUser]);
        setIsAddUserModalShowing(false);
    }
    return (
        <section className="card users-container">

            <SearchBar />
            <UserList
                users={users}
                onDelete={deleteUser}
            />
            {isAddUserModalShowing && <UserAdd hideModal={hideAddUserModal} addUserHandler={addUserHandler} />}

            <button onClick={addUserClickHandler} className="btn-add btn">Add new user</button>
            <Pagination />

        </section>
    );
};

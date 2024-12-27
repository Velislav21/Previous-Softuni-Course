import Pagination from "./pagination/Pagination";
import SearchBar from "../search-bar/SearchBar";
import UserList from "./user-list/User-list";
import { useEffect, useState } from "react";
import UserAdd from "./user-add/UserAdd";
import UserDetails from "./user-details/UserDetails";
import UserDelete from "./user-delete/UserDelete";
const baseUrl = `http://localhost:3030/jsonstore`;

export default function UserSection() {

    const [users, setUsers] = useState([]);
    const [isAddUserModalShowing, setIsAddUserModalShowing] = useState(false);
    const [showUserDetailsById, setShowUserDetailsById] = useState(null);
    const [showUserDeleteById, setUserDeleteById] = useState(null)

    useEffect(() => {
        (async function getUsers() {

            const response = await fetch(`${baseUrl}/users`)
            const result = await response.json();
            const users = Object.values(result)

            setUsers(users)
        })();
    }, []);


    const addUserClickHandler = () => {
        setIsAddUserModalShowing(true);
    };
    const hideAddUserModal = () => {
        setIsAddUserModalShowing(false)
    }

    const hideDetails = () => {
        setShowUserDetailsById(false)
    }
    const showDetails = (userId) => {
        setShowUserDetailsById(userId)
    }

    const addUserHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = {
            ...Object.fromEntries(formData),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

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
    const userDeleteClickHandler = (id) => {

        setUserDeleteById(id)
    };

    const onClose = () => {
        setUserDeleteById(null)
    }

    const userDeleteHandler = async (id) => {
        console.log(id)
        await fetch(`${baseUrl}/users/${id}`, {
            method: 'DELETE'
        });

        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
        setUserDeleteById(null);
    }
    return (
        <section className="card users-container">

            <SearchBar />
            <UserList
                users={users}
                onDeleteClick={userDeleteClickHandler}
                showDetails={showDetails}

            />
            {showUserDetailsById &&
                <UserDetails
                    hideDetails={hideDetails}
                    user={users.find((user) => user._id === showUserDetailsById)}
                />}
            {showUserDeleteById &&
                <UserDelete onClose={onClose} onDelete={() => userDeleteHandler(showUserDeleteById)}
                />}
            {isAddUserModalShowing && <UserAdd hideModal={hideAddUserModal} addUserHandler={addUserHandler} />}

            <button onClick={addUserClickHandler} className="btn-add btn">Add new user</button>
            <Pagination />

        </section>
    );
};

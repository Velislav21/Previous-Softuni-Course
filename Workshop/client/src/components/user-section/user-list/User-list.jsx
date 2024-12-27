import Thead from "../Thead"
import UserListItem from "./user-list-item/User-list-item"

export default function UserList({ users, onDelete }) {

    return (
        <div className="table-wrapper">

            <table className="table">
                <Thead />
                <tbody>
                    {users.map(user =>
                        <UserListItem
                            key={user._id}
                            {...user}
                            onDelete={() => onDelete(user._id)}
                        />)}
                </tbody>
            </table>

        </div>
    )
}
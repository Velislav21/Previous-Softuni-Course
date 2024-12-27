import Thead from "../Thead"
import UserListItem from "./user-list-item/User-list-item"

export default function UserList({ users, onDeleteClick, showDetails }) {

    return (
        <div className="table-wrapper">

            <table className="table">
                <Thead />
                <tbody>
                    {users.map(user =>
                        <UserListItem
                            key={user._id}
                            user={user}
                            onDeleteClick={onDeleteClick}
                            showDetails={showDetails}
                        />)}
                </tbody>
            </table>

        </div>
    )
}
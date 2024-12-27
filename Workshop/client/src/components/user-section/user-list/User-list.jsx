import Thead from "../Thead"
import UserListItem from "./user-list-item/User-list-item"

export default function UserList({ users }) {

    return (
        <div className="table-wrapper">

            <table className="table">
                <Thead />
                <tbody>
                    {users.map(user =>
                        <UserListItem
                            key={user._id}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            phoneNumber={user.phoneNumber}
                            email={user.email}
                            createdAt={user.createdAt}
                        />)}
                </tbody>
            </table>

        </div>
    )
}
import ModalCreatUser from "./ModalCreatUser";







const ManageUser = (props) => {
    return (
        <div className="Manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div>
                    <button>Add new User</button>
                </div>
                <div>
                    Table-user
                    <ModalCreatUser />
                </div>
            </div>
        </div>
    )
}
export default ManageUser;
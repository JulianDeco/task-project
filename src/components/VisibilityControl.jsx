export const VisibilityControl = ({ setShowCompleted, cleanTasks, isChecked }) => {

    const handleDelete= () => {
        if (window.confirm('Are you sure you want to delete it?')){
            cleanTasks()
        }
    }
    return (
    <div className="row d-flex jutifiy-content-between bg-dark text-white text-center p-2 border-secondary rounded">
        <div className="form-check form-switch col-8">
            <input
                type="checkbox"
                checked={ isChecked }
                onChange={(e) => setShowCompleted(e.target.checked)}
                className="form-check-input"
            />{" "}
            <label>Show Tasks Done</label>
        </div>

        <button onClick={ handleDelete } className="col-4 btn btn-danger btn-sm">
            Clear
        </button>
    </div>
    );
};

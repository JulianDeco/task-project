export const Container = ({ children }) => {
    return(
        <div className="container p-4 bg-dark.bg-gradient ">
            <div className="col-md-4 offset-md-4">
                <h1 className="text-center">ToDo App</h1>
                {children}
            </div>
        </div>
    )
}
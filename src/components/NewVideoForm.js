function NewVideoForm() {
    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Video Title</label>
                    <input type="text" className="form-control" required></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Video Title</label>
                    <textarea className="form-control" rows={3} required></textarea>
                </div>
            </form>
        </div>
    )
}

export default NewVideoForm
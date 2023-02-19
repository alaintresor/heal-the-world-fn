

export default function ProfileModal({ show, handleClose }) {
  return (
    <>
      <div className={show ? "display-block" : "display-none"}>
        <div class="modal-overlay">
          <div class="modal-container">
            <div class="modal-header">
              <h2>Person Information</h2>
              <button class="close-modal" onClick={() => handleClose()}>&times;</button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="First Name" />
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Last Name" />
                </div>
                <div class="form-group">
                  <select class="form-control">
                    <option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div class="form-group">
                  <input type="date" class="form-control" placeholder="Date of Birth" />
                </div>
                <div class="form-group">
                  <input type="number" class="form-control" placeholder="Phone number" prefix="+" />
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Location" />
                </div>
                <div class="btn-container">
                  <button type="submit" class="btn">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
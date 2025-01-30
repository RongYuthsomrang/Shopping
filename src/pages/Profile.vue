<template>
    <div class="container" style="padding-top: 50px; padding-right: 20px; padding-bottom: 50px;">
      <div class="row">
        <!-- Profile Image -->
        <div class="col-lg-6 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
          <div class="card border-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPq_GdHrAfGdnr3cLDeagSc7X_twjR_6Cz9Q&s"
              alt="Profile"
              class="profile-img"
            />
          </div>
        </div>
  
        <!-- Form Section -->
        <div class="col-lg-6">
          <div class="card form-card">
            <form>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" class="form-control" placeholder="Enter your name" />
              </div>
  
              <div class="form-group">
                <label for="age">Age:</label>
                <input type="number" id="age" class="form-control" placeholder="Enter your age" />
              </div>
  
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" class="form-control" placeholder="Enter your email" />
              </div>
  
              <div class="form-group">
                <label for="location">Location:</label>
                <input type="text" id="location" class="form-control" placeholder="Enter your location" />
              </div>
  
              <div class="form-group">
                <input type="file" id="file" accept="image/*" class="form-control-file" />
              </div>
  
              <hr />
  
              <!-- Buttons -->
              <div class="form-buttons d-flex">
                <button type="submit" class="btn btn-primary btn-lg">Login</button>
                <button type="reset" class="btn btn-danger btn-lg">Clear</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Any necessary script can go here.
  </script>
  
  <style lang="scss" scoped>
  .container {
    padding-top: 50px;
    padding-right: 50px;
  }
  
  .card {
    border-radius: 15px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  }
  
  .profile-img {
    width: 100%; /* Ensure image is responsive */
    max-width: 400px; /* Ensure the image does not exceed 400px */
    height: auto;
    border-radius: 10px;
    object-fit: cover;
    display: block;
    margin: 0 auto; /* Centers the image horizontally */
  }
  
  .form-card {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 15px;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.1);
  }
  
  .form-group label {
    font-size: 1.1rem;
    font-weight: 600;
  }
  
  .form-control {
    border-radius: 10px;
    padding: 12px;
    margin-bottom: 15px;
    font-size: 1rem;
    border: 1px solid #ccc;
  }
  
  .form-control:focus {
    border-color: #007bff;
    box-shadow: 0px 0px 5px rgba(0, 123, 255, 0.5);
  }
  
  .form-control-file {
    border-radius: 10px;
  }
  
  .form-buttons {
    margin-top: 20px;
    display: flex; /* Keep the buttons in a row */
   
  }
  
  .btn {
    padding: 12px 30px;
    border-radius: 25px;
    font-size: 1.1rem;
    margin-right: 15px;
  }
  
  .btn-outline-primary:hover {
    background-color: #007bff;
    color: white;
  }
  
  .btn-outline-danger:hover {
    background-color: #dc3545;
    color: white;
  }
  
  /* For large screens */
  @media (max-width: 991px) {
    .row {
      flex-direction: column;
      align-items: center;
    }
  }
  
  /* For mobile screens */
  @media (max-width: 767px) {
    .container {
      padding-right: 20px;
      padding-left: 20px;
    }
  
    .card {
      width: 100%;
    }
  
    .form-card {
      padding: 15px;
    }
  
    .form-control,
    .btn {
      font-size: 1rem;
    }
  
    .form-buttons {
      flex-direction: column;
      align-items: center;
    }
  
    .form-buttons .btn {
      width: 100%;
      margin-bottom: 10px;
    }
  
    /* Profile image adjustments */
    .profile-img {
      max-width: 90%; /* Limit image size for mobile */
    }
  
    .col-lg-6 {
      display: flex;
      justify-content: center;
      align-items: center; /* Centers the image container */
    }
  }
  </style>
  
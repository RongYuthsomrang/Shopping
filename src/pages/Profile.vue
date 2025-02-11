<template>
  <div class="container" style="padding-top: 50px; padding-right: 20px; padding-bottom: 50px;">
    <div class="row">
      <!-- Profile Image -->
      <div class="col-12 col-lg-6 mb-4 mb-lg-0">
        <div class="card">
          <img
            :src="profileImage"
            alt="Profile image"
            class="card-img-top"
            style="border-top-left-radius: 10px; border-top-right-radius: 10px; width: 100%; height: auto;">
          <div class="card-body" style="padding: 15px;">
            <center>
              <h5 class="card-title" style="font-size: 1.25rem; font-weight: bold; color: #333;">
                {{ profileName }}
              </h5>
            </center>
          </div>
        </div>
      </div>

      <!-- Form Section -->
      <div class="col-12 col-lg-6">
        <div class="card form-card">
          <form @submit.prevent="handleLogin">
            <center>
              <div class="card-header bg-Violet-700 text-light">
                <h1><b>Personal Form</b></h1>
              </div>
            </center>
            <br>
            <div class="row">
              <h5>Username: </h5>
              <div class="col">
                <input type="text" class="form-control" placeholder="First name" aria-label="First name" v-model="firstName">
              </div>
              <div class="col">
                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" v-model="lastName">
              </div>
            </div>
            <div class="form-group">
              <label for="gender">Gender:</label>
              <select id="gender" class="form-control" v-model="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" class="form-control" placeholder="Enter your email" v-model="email" />
            </div>
            <div class="form-group">
              <label for="location">Location:</label>
              <input type="text" id="location" class="form-control" placeholder="Enter your location" v-model="location" />
            </div>
            <div class="form-group">
              <input type="file" id="file" accept="image/*" class="form-control-file" @change="handleFileChange"/>
            </div>
            <hr />
            <!-- Buttons -->
            <div class="form-buttons d-flex justify-content-between">
              <button type="submit" class="btn bg-Violet-700 text-light btn-lg">Login</button>
              <button type="reset" class="btn btn-danger btn-lg" @click="resetForm">Clear</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const profileImage = ref("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSnyw54qdhqa0ISfF-_xM8H06WxfkM8hXhxudqC1j5Ood5T7yEIgM3c6n5qCcOQD9lc_c&usqp=CAU");
const firstName = ref("");
const lastName = ref("");
const gender = ref("male"); 
const email = ref("");
const location = ref("");
const profileName = ref("Profile Name");

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      profileImage.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
};

const handleLogin = () => {
  // Check if all required fields are filled
  if (!firstName.value || !lastName.value || !email.value || !location.value) {
    alert("Please fill in all the fields.");
    return;
  }

  profileName.value = `${firstName.value} ${lastName.value}`;

  alert(`Login details: ${firstName.value} ${lastName.value}, ${email.value}, ${location.value}, ${gender.value}`);
};

const resetForm = () => {
  firstName.value = "";
  lastName.value = "";
  gender.value = "male"; 
  email.value = "";
  location.value = "";
  profileImage.value = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSnyw54qdhqa0ISfF-_xM8H06WxfkM8hXhxudqC1j5Ood5T7yEIgM3c6n5qCcOQD9lc_c&usqp=CAU"; // Reset to default profile image
  profileName.value = "Profile Name";
};
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
  width: 100%; 
  max-width: 400px; 
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  display: block;
  margin: 0 auto;
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
  box-shadow: 0px 0px 5px rgba(123, 0, 255, 0.5);
}

.form-control-file {
  border-radius: 10px;
}

.form-buttons {
  margin-top: 20px;
  display: flex; 
  justify-content: space-between; 
}

.form-buttons .btn {
  padding: 12px 30px;
  border-radius: 25px;
  font-size: 1.1rem;
  margin-right: 15px;
}

.form-buttons .btn:last-child {
  margin-right: 0; 
}


.btn-primary:hover {
  background-color: #0056b3;
  color: white;
}

.btn-danger:hover {
  background-color: #d32f2f;
  color: white;
}

@media (max-width: 991px) {
  .row {
    flex-direction: column;
    align-items: center;
  }
}


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


  .profile-img {
    max-width: 90%; 
  }

  .col-lg-6 {
    display: flex;
    justify-content: center;
    align-items: center; 
  }
}
</style>

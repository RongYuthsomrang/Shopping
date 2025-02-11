<template>
  <div class="about-us">
    <section class="contact">
      <center><h2 class="contact-header">Contact Us</h2></center>
      <br><br>
      <p>If you have any questions or feedback, feel free to reach out to us!</p>
      <form @submit.prevent="handleSubmit">
        <input
          type="text"
          v-model="contactForm.name"
          placeholder="Your Name"
          required
          aria-label="Your Name"
        />
        <input
          type="email"
          v-model="contactForm.email"
          placeholder="Your Email"
          required
          aria-label="Your Email"
        />
        <textarea
          v-model="contactForm.message"
          placeholder="Your Message"
          required
          aria-label="Your Message"
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>

    <section class="team">
      <h2>Meet Our Team</h2>
      <div class="team-members">
        <div class="team-member" v-for="member in teamMembers" :key="member.name">
          <img :src="member.image" :alt="`Image of ${member.name}`" />
          <h3>{{ member.name }}</h3>
          <p>{{ member.role }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      contactForm: {
        name: "",
        email: "",
        message: ""
      },
      teamMembers: [
        {
          name: "Fanny New Arriver",
          role: "CEO & Founder",
          image: "https://pbs.twimg.com/media/GH0M2RLaUAAMso1.jpg"
        },
        {
          name: "Fanny Epic",
          role: "Lead Developer",
          image: "https://i.redd.it/new-fanny-revamped-skylark-revamped-skin-survey-cr-v0-3dmuitvocdae1.jpg?width=1000&format=pjpg&auto=webp&s=57bf935770f6dc207d6436121577b4b2e9c59aa3"
        },
        {
          name: "Fanny Blade Of Kibou",
          role: "Product Manager",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL-KyQuMbGEcnNMYFmxF9_b4k_XCj_2_2igw&s"
        }
      ]
    };
  },
  methods: {
    handleSubmit() {
      alert("Message sent! We will get back to you shortly.");
      this.contactForm.name = "";
      this.contactForm.email = "";
      this.contactForm.message = "";
    }
  }
};
</script>

<style scoped>
.about-us {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f9;
}

.contact-header {
  background-color: #8000ff;
  color: white;
  width: 70%;
  margin: 0 auto;
  padding: 10px 0;
  font-size: 2rem;
  text-align: center;
  border-radius: 8px;
}

.contact {
  padding: 40px 20px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 600px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

form input,
form textarea {
  padding: 12px;
  width: 100%;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

form input:focus,
form textarea:focus {
  outline: none;
  border-color: #8000ff;
}

form button {
  padding: 12px;
  background-color: #8000ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
}

form button:hover {
  background-color: #003399;
}

.team {
  padding: 40px 20px;
  text-align: center;
}

.team h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.team-members {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.team-member {
  text-align: center;
  max-width: 220px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.team-member:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.team-member img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.team-member h3 {
  font-size: 1.2rem;
  margin-top: 10px;
}

.team-member p {
  font-size: 1rem;
  color: #666;
}
</style>

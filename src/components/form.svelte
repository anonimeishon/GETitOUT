<script>
  import { db } from "../util/firebase";
  import DotLoading from "./DotLoading.svelte";

  let formData = { name: "", email: "", link: "" };
  const addPerson = async (formData) => {
    try {
      if(!!formData.name){
      await db.collection("People").add({ ...formData });}

    } catch (err) {
      console.error(err.message);
    }
  };

  let promise 
  
  const handleForm = async (e) => {
    e.preventDefault();
    promise = addPerson(formData);
    formData = { name: "", email: "", link: "" };
  };
</script>

<form on:submit={handleForm} class="content">
  <div class={"formContainer"}>
    <label>
      <input
        bind:value={formData.name}
        placeholder={"User Name"}
        type="text"
        required
      />
    </label>
    <label>
      <input
        bind:value={formData.email}
        placeholder={"Email"}
        type="email"
        required
      />
    </label>
    <label>
      <input
        bind:value={formData.link}
        placeholder={"Image Link"}
        type="text"
        required
      />
    </label>
    {#await promise}
      <button disabled class={"formButton"} type="button">
        <DotLoading black={true} />
      </button>
    {:then done}
    <button class={"formButton"} type="submit"> SEND </button>
    {:catch error}
    <div>{error}</div>
    <button class={"formButton"} type="submit"> SEND </button>
    {/await}
  </div>
</form>

<style>
  .formContainer {
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    align-items: center;
    height: 320px;
  }
  input {
    background-color: black;
    color: white;
    width: 400px;
    height: 55px;
    margin-top: 20px;
  }
  ::placeholder {
    color: white;
    opacity: 80%;
    padding-left: 10px;
  }
  .formButton {
    color: black;
    font-weight: bold;
    background-color: white;
    margin-top: 50px;
    cursor: pointer;
    padding: 0.8rem 4.5rem;
    font-size: 1.6rem;
    border-radius: 5px;
  }
</style>

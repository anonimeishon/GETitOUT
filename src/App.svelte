<script>
  import LogoIcon from "./components/LogoIcon.svelte";
  import Card from "./components/Card.svelte"
  let formData = { name: "", email: "", link: "" };

  const handleForm = async (e) => {
    console.log(formData);
    formData = { name: "", email: "", link: "" };
    e.preventDefault();
  };
</script>

<main>
  <div class={"container"}>
    <div class="topBar"><LogoIcon height={40} width={300} /></div>
    <div class={"blocksContainer"}>

      <div class={"leftBlock"}>
        <h1 class={"leftBlockTitle"}>enter the data <br />to the register</h1>

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
              type="text"
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
          <button class={"formButton"} type="submit">SEND</button>
        </div>
        </form>
      </div>
      <div class={"rightBlock"} >
      <h1 class={"rightBlockTitle"}>
      UPDATE <br>RECORDED DATA
      </h1>
      <Card/>
      </div>
    </div>
  </div>
</main>

<style>
  :global(body) {
    /* this will apply to <body> */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .container {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }
  .topBar {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 12px 18px -6px rgb(66 66 66 / 20%);
    z-index: 1;
  }
  .blocksContainer {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
  }

  .leftBlock {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    background-color: #000000;
    width: 50%;
  }  

  .leftBlockTitle {
    margin-bottom: 50px;
    word-spacing: 5px;
    letter-spacing: 5px;
    margin-top:80px;
    color: #ffffff;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    font-size: 3em;
  }
  .formContainer{
    display:flex;
    flex-direction: column;
    /* justify-content: space-around; */
    align-items: center;
    height:320px;
  }
  input {
    background-color: black;
    color: white;
    width:400px;
    height: 55px;
    margin-top: 20px;
  }
  ::placeholder{
    color:white;
    opacity: 80%;
    padding-left:10px;
  }
  .formButton{
    color:black;
    font-weight: bold;
    background-color:white;
    margin-top: 50px;
    cursor: pointer;
    padding: 0.8rem 4.5rem;
    font-size: 1.6rem;
  }
  .rightBlock {
    background-color: #ffffff;
    width: 50%;
    position: relative;
  }
  .rightBlock::before {
    content: "";
    transform: translateY(-50%);
    position: absolute;
    top: 45%;
    left: -40px;
    width: 0;
    height: 0;
    border-top: solid 23px transparent;
    border-right: solid 40px white;
    border-bottom: solid 23px transparent;
  }
  .rightBlockTitle {
    margin-bottom: 50px;
    word-spacing: 5px;
    letter-spacing: 5px;
    margin-top:80px;
    color: #000000;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    font-size: 3em;
  }
  main {
    text-align: center;
    margin: 0 auto;
  }


  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

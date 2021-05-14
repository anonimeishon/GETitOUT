<script>
  import LogoIcon from "./components/LogoIcon.svelte";
</script>

<main>
  <div class={"container"}>
    <div class="topBar"><LogoIcon height={40} width={300} /></div>
    <div class={"blocksContainer"}>
      <div class={"leftBlock"}>
        <h1>enter the data to the register</h1>
        <form class="content">
          <label>
			<input  placeholder={"User Name"} type="text"  />

			</label>
          <label>
			<input placeholder={"Email"} type="text"  />
			</label>
          <label>
			<input placeholder={"Image Link"} type="text"  />
			</label>
			<button>SEND</button>
        </form>
      </div>
      <div class={"rightBlock"} />
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
input{
	background-color: black;
}
  .container {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }
  .topBar {
    width: 100%;
    height: 86px;
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
    justify-content: center;
    align-items: center;
    background-color: #000000;
    width: 50%;

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

  main {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    color: #ffffff;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    font-size: 3em;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

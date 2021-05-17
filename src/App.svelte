<script>
  import LogoIcon from "./components/LogoIcon.svelte";
  import CardHolder from "./components/CardHolder.svelte";
  import InputPerson from "./components/form.svelte";
</script>

<main>
  <div class={"container"}>
    <div class="topBar"><LogoIcon height={40} width={300} /></div>
    <div class={"blocksContainer"}>
      <div class={"leftBlock"}>
        <h1 class={"leftBlockTitle"}>enter the data <br />to the register</h1>

        <InputPerson />
      </div>
      <div class={"rightBlock"}>
        <CardHolder />
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
    min-height: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 12px 18px -6px rgb(66 66 66 / 20%);
    z-index: 99;
  }
  .blocksContainer {
    display: flex;
    /* justify-content: space-evenly; */
    width: 100%;
    height: 100%;
  }
  .leftBlock {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    background-color: #000000;
    align-items: center;
    position: relative;
    width: 50%;
    z-index: 2;
    /* min-width: 700px; */
  }
  .rightBlock {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    width: 50%;
    position: relative;
    /* min-width: 700px; */
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
    z-index: 3;
  }
  .leftBlockTitle {
    margin-bottom: 50px;
    word-spacing: 5px;
    letter-spacing: 5px;
    margin-top: 80px;
    color: #ffffff;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    font-size: 3em;
  }
  main {
    text-align: center;
    margin: 0 auto;
    max-width: none;
  }
  @media screen and (max-width: 768px){
    .leftBlock{
      width: 100%;
      min-height: calc(100vh - 100px);
    }
    .rightBlock{
      width: 100%;
      min-height: calc(100vh - 100px);

    }
    .topBar{
      position:sticky;
    }
    .blocksContainer{
      flex-direction: column;
      align-items: center;
    }
    .rightBlock::before {
    transform: translateY();
    content: "";
    position: absolute;
    top: -30px;
    left: 45%;
    width: 0;
    height: 0;
    border-left:solid 40px transparent;
    border-right: solid 40px transparent;
    border-bottom: solid 40px white;
  }
    
  }
</style>

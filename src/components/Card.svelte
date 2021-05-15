<script>
  let Image = "assets/image.png";
  export let link = Image;
  export let name = "Juliet martín";
  export let email = "julietmartin1221@gmail.com";
</script>

<div class={"card"}>
  <img src={link} alt={"Image Link"} />
  <div class={"cardText"}>
    <h1 class={"name"}>{name}</h1>
    <p class={"email"}>{email}</p>
  </div>
</div>

<style>
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 250px;
    background-color: black;
  }
  .cardText {
    display: flex;
    flex-direction: column;
    justify-items: space-between;
    align-content: center;
  }
  .name {
    text-transform: capitalize;
    font-family: "Montserrat", sans-serif;
  }
  .email {
    text-transform: lowercase;
  }

</style>

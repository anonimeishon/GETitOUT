<script>
  let Image = "assets/image.png";
  export let link = Image;
  export let name = "Juliet martín";
  export let email = "julietmartin1221@gmail.com";
</script>

<div class={"card"}>
  <img class={"image"} src={link} alt={"Image Link"} />
  <div class={"cardText"}>
    <p class={"name"}>{name}</p>
    <p class={"email"}>{email}</p>
  </div>
</div>

<style>
  p {
    margin: 0;
    padding: 0;
  }
  .image{
    border-radius: 10px 10px 0 0;
    width: 270px;
    height:160px;
    pointer-events: none;
    object-fit:cover;
  }
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    width: 270px;
    height: 250px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 10px;
    pointer-events: none;
    /* background-color: black; */
  }
.cardText{
    display:flex;
    flex-direction: column;
    justify-content: center;
    /* height: 100%; */
    height: 90px;
    pointer-events: none;

}
  .name {
    text-transform: capitalize;
    font-family: "Montserrat", sans-serif;
    font-size: 1.7rem;
    font-weight: bold;
    /* margin-top: 1rem; */
  }
  .email {
    text-transform: lowercase;
    margin-top: 0.5rem;
  }
</style>

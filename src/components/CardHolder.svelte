<script>
  import Card from "./Card.svelte";
  import { db } from "../util/firebase.js";
  import LoadingSpinner from "./Spinner.svelte";
  // import { collectionData } from "rxfire/firestore";
  // import { startWith } from "rxjs/operators";
  import { onMount } from "svelte";

  // This updates the data in real time

  // const query = db.collection("People").limit(10);
  // const peopleData = collectionData(query).pipe(startWith([]));

  // Using this one to give functionality to the update button
  
  /** getPeople - Contains fetched data from firebase*/
  let peopleData = [];
  const getPeople = async () => {
    const query = await db.collection("People").limit(10).get();
    let temp = [];
    query.forEach((doc) => {
      temp.push(doc.data());
    });

    return [...temp];
  };

  onMount(() => {
    peopleData = getPeople();
  });

  const handleClick = () => {
    peopleData = getPeople();
  };

  let element;
  let pos = { top: 0, left: 0, x: 0, y: 0 };

  const mouseMoveHandler = (e) => {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;
    // Scroll the element
    element.scrollTop = pos.top - dy;
    element.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = () => {
    element.style.cursor = "grab";
    element.style.removeProperty("user-select");
    element.removeEventListener("mousemove", mouseMoveHandler);
    element.removeEventListener("mouseup", mouseUpHandler);
  };

  const mouseDownHandler = (e) => {
    element.style.cursor = "grabbing";
    element.style.userSelect = "none";
    pos = {
      // The current scroll
      left: element.scrollLeft,
      top: element.scrollTop,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    };
    element.addEventListener("mousemove", mouseMoveHandler);
    element.addEventListener("mouseup", mouseUpHandler);
  };
</script>
<div class={"container"}>
<div
  class={"wrapper"}
  bind:this={element}
  on:mousedown={mouseDownHandler}
  on:mouseleave={mouseUpHandler}
>
  <h1 class={"rightBlockTitle"}>
    UPDATE <br />RECORDED DATA
  </h1>

  {#await peopleData}
    <div class={"spinner"}><LoadingSpinner /></div>
  {:then data}
      <div id="grid" class={"grid"}>
        {#each data as person}
          <div>
            <Card {...person} />
          </div>
        {/each}
      </div>
  {:catch error}
    <div class={'error'}>{error}</div>
  {/await}
</div>
<div class={"blurDiv"}>
  {#await peopleData}
    <button disabled class={"updateButton"}> UPDATE </button>
  {:then done}
    <button on:click={handleClick} class={"updateButton"}> UPDATE </button>
  {:catch error}
    <div class={"error"}>{error}</div>
    <button on:click={handleClick} class={"updateButton"}> UPDATE </button>
  {/await}
</div>
</div>
<style>
  .spinner {
    margin-bottom: 2rem;
  }
  .error {
    color: red;
  }
  .container{
    display:flex;
    flex-direction: column;
    align-items: center;
    height:100%;
    width:100%;
    /* justify-content: space-around; */
  }
  .blurDiv {
    z-index: 1;
    flex:1;
    width: 100%;
    box-shadow: 0px -5px 40px #e5e5e5;
    background: rgb(229, 229, 229);
    background: linear-gradient(
      0deg,
      rgba(229, 229, 229, 1) 80%,
      rgba(229, 229, 229, 0.6) 100%
    );
  }
  .wrapper {
    position: relative;
    height: 520px;
    cursor: grab;
    /* min-width: 546px; */
    overflow: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .wrapper::-webkit-scrollbar {
    display: none;
  }

  .grid {
    background-color: white;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 10px;
    column-gap: 25px;
    row-gap: 30px;
    height: fit-content;
    /* min-width: 546px; */
  }
  @media screen and (max-width: 1024px) {
    .grid {
      grid-template-columns: 1fr;
      justify-items: center;
    }
  }  .rightBlockTitle {
    margin-bottom: 50px;
    word-spacing: 5px;
    letter-spacing: 5px;
    margin-top: 80px;
    color: #000000;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    font-size: 3em;
  }

  .updateButton {
    color: white;
    font-weight: bold;
    background-color: black;
    margin-top: 28px;
    cursor: pointer;
    padding: 0.8rem 3.5rem;
    font-size: 1.6rem;
    border-radius: 5px;
    z-index: 99;
  }
</style>

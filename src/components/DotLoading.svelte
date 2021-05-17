<script>
  export let white = false;
  export let black = false;
</script>

<div class:lds-ellipsis-black={black}
     class:lds-ellipsis-white={white}
     >
  <div />
  <div />
  <div />
  <div />
</div>

<style>
  .lds-ellipsis-black {
    display: inline-block;
    position: relative;
    width: 35px;
    height: 20px;
    transform: translateX(-50%);
  }
  .lds-ellipsis-black div {
    position: absolute;
    top: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #000;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis-white {
    display: inline-block;
    position: relative;
    width: 35px;
    height: 20px;
    transform: translateX(-50%);
  }
  .lds-ellipsis-white div {
    position: absolute;
    top: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis-black div:nth-child(1),
  .lds-ellipsis-white div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis-black div:nth-child(2),
  .lds-ellipsis-white div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis-black div:nth-child(3),
  .lds-ellipsis-white div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis-black div:nth-child(4),
  .lds-ellipsis-white div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
</style>

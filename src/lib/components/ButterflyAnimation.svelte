<!-- src/lib/components/ButterflyAnimation.svelte -->
<script>
  export let count = 5;
  
  const butterflies = Array(count).fill().map((_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 15 + Math.random() * 10,
    size: 20 + Math.random() * 15,
    opacity: 0.1 + Math.random() * 0.2,
    emoji: ['🦋', '🦋', '🦋', '💙', '💜'][Math.floor(Math.random() * 5)]
  }));
</script>

{#each butterflies as butterfly}
  <div 
    class="absolute butterfly butterfly-{butterfly.id}"
    style="
      animation-delay: {butterfly.delay}s;
      animation-duration: {butterfly.duration}s;
      font-size: {butterfly.size}px;
      opacity: {butterfly.opacity};
    "
  >
    {butterfly.emoji}
  </div>
{/each}

<style>
  .butterfly {
    animation: float infinite linear;
    pointer-events: none;
    will-change: transform;
  }
  
  .butterfly-0 {
    animation-name: float-left;
  }
  
  .butterfly-1 {
    animation-name: float-right;
  }
  
  .butterfly-2 {
    animation-name: float-diagonal;
  }
  
  .butterfly-3 {
    animation-name: float-spiral;
  }
  
  .butterfly-4 {
    animation-name: float-wave;
  }
  
  @keyframes float-left {
    0% {
      transform: translateX(-100px) translateY(100vh) rotate(0deg);
    }
    25% {
      transform: translateX(20vw) translateY(75vh) rotate(90deg);
    }
    50% {
      transform: translateX(40vw) translateY(50vh) rotate(180deg);
    }
    75% {
      transform: translateX(60vw) translateY(25vh) rotate(270deg);
    }
    100% {
      transform: translateX(calc(100vw + 100px)) translateY(0vh) rotate(360deg);
    }
  }
  
  @keyframes float-right {
    0% {
      transform: translateX(calc(100vw + 100px)) translateY(0vh) rotate(0deg);
    }
    25% {
      transform: translateX(80vw) translateY(25vh) rotate(-90deg);
    }
    50% {
      transform: translateX(60vw) translateY(50vh) rotate(-180deg);
    }
    75% {
      transform: translateX(40vw) translateY(75vh) rotate(-270deg);
    }
    100% {
      transform: translateX(-100px) translateY(100vh) rotate(-360deg);
    }
  }
  
  @keyframes float-diagonal {
    0% {
      transform: translateX(-100px) translateY(-100px) rotate(0deg);
    }
    50% {
      transform: translateX(50vw) translateY(50vh) rotate(180deg);
    }
    100% {
      transform: translateX(calc(100vw + 100px)) translateY(calc(100vh + 100px)) rotate(360deg);
    }
  }
  
  @keyframes float-spiral {
    0% {
      transform: translateX(50vw) translateY(50vh) rotate(0deg) scale(0.5);
    }
    25% {
      transform: translateX(calc(50vw + 200px)) translateY(calc(50vh - 100px)) rotate(90deg) scale(0.8);
    }
    50% {
      transform: translateX(calc(50vw + 100px)) translateY(calc(50vh + 200px)) rotate(180deg) scale(1.2);
    }
    75% {
      transform: translateX(calc(50vw - 200px)) translateY(calc(50vh + 100px)) rotate(270deg) scale(0.8);
    }
    100% {
      transform: translateX(50vw) translateY(50vh) rotate(360deg) scale(0.5);
    }
  }
  
  @keyframes float-wave {
    0% {
      transform: translateX(-100px) translateY(50vh) rotate(0deg);
    }
    25% {
      transform: translateX(25vw) translateY(30vh) rotate(45deg);
    }
    50% {
      transform: translateX(50vw) translateY(70vh) rotate(90deg);
    }
    75% {
      transform: translateX(75vw) translateY(30vh) rotate(135deg);
    }
    100% {
      transform: translateX(calc(100vw + 100px)) translateY(50vh) rotate(180deg);
    }
  }
  
  @media (prefers-reduced-motion: reduce) {
    .butterfly {
      animation: none;
      opacity: 0.1;
    }
  }
</style>

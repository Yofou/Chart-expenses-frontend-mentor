<script lang="ts" context="module">
  const options = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
  const todayIndex = new Date().getDay()

  const today = options[todayIndex]
</script>

<script lang="ts">
  export let money: number;
  export let day: string
  export let height: string;
  export let stagger: number = 0

  $: isToday = today === day
</script>

<div class="relative flex flex-col w-full group max-w-[3.14781rem] gap-2 items-center" style:--height={height} style:--stagger={`${stagger}ms`}>
  <p class="pointer-events-none absolute opacity-0 group-hover:opacity-100 transition-opacity top-0 left-1/2 -translate-x-1/2  z-10 translate-y-[calc(-100%-0.5rem)] bg-darkBrown rounded-[0.3125rem] p-2 text-white body font-bold">${money}</p>
  <div class="h-[var(--height,1rem)] hover:bg-redHover transition-colors w-full bg-red rounded-[0.3125rem] motion-reduce:scale-y-100 scale-y-0 stagger-animation" class:!bg-cyan={isToday} class:hover:!bg-cyanHover={isToday}  />
  <p class="mini-caption text-[0.75rem] md:mini-caption text-brown">{day}</p>
</div>

<style>
  @keyframes slideup {
    from {
      transform: scaleY(0%);
    }

    to {
      transform: scaleY(100%);
    }
  }

  .stagger-animation {

    animation: slideup 500ms forwards;
    animation-delay: var(--stagger, 0ms);
    transform-origin: bottom;
    @media (prefers-reduced-motion) {
      animation: none;
    }
  }
</style>

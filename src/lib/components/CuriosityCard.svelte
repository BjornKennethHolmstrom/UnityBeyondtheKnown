<!-- src/lib/components/CuriosityCard.svelte -->
<script>
  import { createEventDispatcher } from 'svelte';
  import { t } from 'svelte-i18n';
  
  export let card;
  
  const dispatch = createEventDispatcher();
  
  const colorClasses = {
    blue: 'from-blue-400 to-blue-600',
    green: 'from-green-400 to-green-600', 
    purple: 'from-purple-400 to-purple-600',
    orange: 'from-orange-400 to-orange-600',
    yellow: 'from-yellow-400 to-yellow-600',
    pink: 'from-pink-400 to-pink-600',
    rainbow: 'from-pink-400 via-purple-400 to-blue-400'
  };
  
  const butterflies = {
    transformation: '🦋',
    systems: '🦋', 
    bridge: '🦋',
    perspective: '🦋'
  };

  // Animation variants for different card types
  const animations = {
    transformation: 'animate-pulse',
    systems: 'animate-bounce',
    bridge: 'animate-pulse',
    perspective: 'animate-pulse'
  };
</script>

<div class="max-w-2xl mx-auto">
  <!-- The Card -->
  <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 transform hover:scale-105 transition-all duration-300 border border-white/20 shadow-2xl">
    <!-- Butterfly Icon -->
    <div class="text-center mb-6">
      <div class="inline-block text-6xl {animations[card.type]}">
        {butterflies[card.type]}
      </div>
    </div>
    
    <!-- Question -->
    <div class="text-center mb-8">
      <p class="text-2xl md:text-3xl text-white leading-relaxed font-light">
        "{card.text}"
      </p>
    </div>
    
    <!-- Card Type Indicator -->
    <div class="text-center mb-6">
      <span class="inline-block px-4 py-1 bg-gradient-to-r {colorClasses[card.color]} rounded-full text-white text-sm font-medium opacity-80">
        {$t(`curiosityCards.types.${card.type}`)}
      </span>
    </div>
    
    <!-- Actions -->
    <div class="flex gap-4 justify-center flex-wrap">
      <button 
        on:click={() => dispatch('reflect')}
        class="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl text-white transition-all border border-white/30 flex items-center gap-2"
      >
        💭 {$t('curiosityCards.reflectOnThis')}
      </button>
      
      <button 
        on:click={() => dispatch('newCard')}
        class="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-xl text-white transition-all flex items-center gap-2"
      >
        {$t('curiosityCards.newQuestion')}
      </button>
    </div>
  </div>
</div>

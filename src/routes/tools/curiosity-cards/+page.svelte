<!-- src/routes/tools/curiosity-cards/+page.svelte -->
<script>
  import { onMount } from 'svelte';
  import { t } from 'svelte-i18n';
  import { base } from '$app/paths';
  import CuriosityCard from '$lib/components/CuriosityCard.svelte';
  import ButterflyAnimation from '$lib/components/ButterflyAnimation.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  let currentCard = null;
  let cardHistory = [];
  let showReflection = false;
  let reflection = '';
  let savedCards = [];

  onMount(() => {
    // Load saved cards from localStorage
    const saved = localStorage.getItem('ubtk_curiosity_cards');
    if (saved) {
      try {
        savedCards = JSON.parse(saved);
      } catch (e) {
        console.warn('Failed to parse saved cards:', e);
        savedCards = [];
      }
    }
  });

  function drawCard() {
    const questions = $t('curiosityCards.questions');
    
    // Don't repeat recent cards
    const availableCards = questions.filter(card => 
      !cardHistory.slice(-3).includes(card.id)
    );
    
    const randomCard = availableCards[Math.floor(Math.random() * availableCards.length)];
    currentCard = randomCard;
    cardHistory.push(randomCard.id);
    
    // Keep history manageable
    if (cardHistory.length > 10) {
      cardHistory = cardHistory.slice(-10);
    }
    
    showReflection = false;
    reflection = '';
  }

  function saveReflection() {
    if (currentCard && reflection.trim()) {
      const cardData = {
        ...currentCard,
        reflection: reflection.trim(),
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleDateString()
      };
      
      savedCards = [cardData, ...savedCards.slice(0, 19)]; // Keep last 20
      localStorage.setItem('ubtk_curiosity_cards', JSON.stringify(savedCards));
      
      showReflection = false;
      reflection = '';
    }
  }

  function getShareData() {
    if (!currentCard) return {};
    
    const baseUrl = typeof window !== 'undefined' ? window.location.origin + base : '';
    return {
      url: `${baseUrl}/tools/curiosity-cards`,
      title: $t('curiosityCards.shareTitle', { values: { question: currentCard.text } }),
      description: $t('curiosityCards.shareDescription'),
      hashtags: $t('curiosityCards.hashtags')
    };
  }
</script>

<svelte:head>
  <title>{$t('curiosityCards.title')} - Unity Beyond the Known</title>
  <meta name="description" content={$t('curiosityCards.subtitle')} />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
  <!-- Floating Butterflies Background -->
  <div class="absolute inset-0 pointer-events-none">
    <ButterflyAnimation count={6} />
  </div>

  <div class="relative z-10 max-w-4xl mx-auto px-4 py-12">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-light mb-6 text-white">
        {$t('curiosityCards.title')}
      </h1>
      <p class="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
        {$t('curiosityCards.subtitle')}
      </p>
    </div>

    <!-- Main Card Area -->
    <div class="text-center mb-12">
      {#if !currentCard}
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-2xl mx-auto border border-white/20">
          <div class="text-6xl mb-6 animate-pulse">🦋</div>
          <p class="text-blue-200 mb-6">
            {$t('curiosityCards.startPrompt')}
          </p>
          <button 
            on:click={drawCard}
            class="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-full text-white font-medium transition-all transform hover:scale-105"
          >
            {$t('curiosityCards.drawQuestion')}
          </button>
        </div>
      {:else}
        <CuriosityCard 
          card={currentCard} 
          on:reflect={() => showReflection = true}
          on:newCard={drawCard}
        />
      {/if}
    </div>

    <!-- Reflection Modal -->
    {#if showReflection && currentCard}
      <div class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div class="bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 max-w-lg w-full border border-slate-600">
          <h3 class="text-2xl mb-4 text-center text-white">{$t('curiosityCards.yourReflection')}</h3>
          <p class="text-slate-300 mb-4 text-center italic">"{currentCard.text}"</p>
          
          <textarea
            bind:value={reflection}
            placeholder={$t('curiosityCards.reflectionPlaceholder')}
            class="w-full h-32 bg-slate-900/50 rounded-lg p-4 text-white resize-none mb-4 border border-slate-600 focus:border-blue-400 focus:outline-none"
          ></textarea>
          
          <div class="flex gap-3 justify-center">
            <button 
              on:click={saveReflection}
              disabled={!reflection.trim()}
              class="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed rounded-lg transition-colors"
            >
              {$t('curiosityCards.saveReflection')}
            </button>
            <button 
              on:click={() => showReflection = false}
              class="px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
            >
              {$t('curiosityCards.close')}
            </button>
          </div>
        </div>
      </div>
    {/if}

    <!-- Share Section -->
    {#if currentCard}
      <div class="text-center mb-12">
        <p class="text-blue-200 mb-4">{$t('curiosityCards.pollinateWorld')}</p>
        <ShareButtons 
          url={getShareData().url}
          title={getShareData().title}
          description={getShareData().description}
          hashtags={getShareData().hashtags}
          size="medium"
        />
      </div>
    {/if}

    <!-- Your Collection -->
    {#if savedCards.length > 0}
      <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
        <h2 class="text-2xl mb-6 text-center text-white">{$t('curiosityCards.yourGarden')}</h2>
        <div class="grid gap-4 max-h-96 overflow-y-auto">
          {#each savedCards.slice(0, 10) as card}
            <div class="bg-slate-800/50 rounded-lg p-4 border border-slate-600/50">
              <p class="text-blue-200 mb-2 italic">"{card.text}"</p>
              <p class="text-slate-300 text-sm mb-1">{card.reflection}</p>
              <p class="text-slate-500 text-xs">{card.date}</p>
            </div>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Back to Tools -->
    <div class="text-center mt-12">
      <a 
        href="{base}/tools"
        class="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm rounded-lg text-blue-200 hover:text-white transition-colors border border-slate-600/50"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Tools
      </a>
    </div>
  </div>
</div>

<style>
  :global(body) {
    overflow-x: hidden;
  }
</style>

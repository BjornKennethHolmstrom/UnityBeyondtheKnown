<!-- src/lib/components/ShareButtons.svelte -->
<script>
  import { browser } from '$app/environment';
  
  export let url = '';
  export let title = 'Unity Beyond the Known';
  export let description = 'What if humanity redirected its resources from conflict to exploration?';
  export let hashtags = 'UnityBeyondTheKnown,SpaceExploration,Consciousness,PeacefulFuture';
  export let size = 'medium'; // 'small', 'medium', 'large'
  export let variant = 'default'; // 'default', 'minimal', 'floating'
  export let showLabels = true;
  
  let copied = false;
  let shareUrl = '';
  
  // Get current URL if not provided
  $: if (browser && !url) {
    shareUrl = window.location.href;
  } else {
    shareUrl = url;
  }
  
  // Size classes
  const sizeClasses = {
    small: 'w-8 h-8 p-1.5',
    medium: 'w-10 h-10 p-2',
    large: 'w-12 h-12 p-2.5'
  };
  
  const iconSizes = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5', 
    large: 'w-6 h-6'
  };
  
  // Share functions
  function shareOnTwitter() {
    const text = encodeURIComponent(`${title} - ${description}`);
    const hashtag = encodeURIComponent(hashtags);
    const shareUrlEncoded = encodeURIComponent(shareUrl);
    window.open(
      `https://twitter.com/intent/tweet?url=${shareUrlEncoded}&text=${text}&hashtags=${hashtag}`,
      '_blank',
      'width=550,height=420'
    );
  }
  
  function shareOnFacebook() {
    const shareUrlEncoded = encodeURIComponent(shareUrl);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${shareUrlEncoded}`,
      '_blank',
      'width=550,height=420'
    );
  }
  
  function shareOnLinkedIn() {
    const titleEncoded = encodeURIComponent(title);
    const descriptionEncoded = encodeURIComponent(description);
    const shareUrlEncoded = encodeURIComponent(shareUrl);
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrlEncoded}&title=${titleEncoded}&summary=${descriptionEncoded}`,
      '_blank',
      'width=550,height=420'
    );
  }
  
  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      copied = true;
      setTimeout(() => copied = false, 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      copied = true;
      setTimeout(() => copied = false, 2000);
    }
  }
  
  function shareOnReddit() {
    const titleEncoded = encodeURIComponent(title);
    const shareUrlEncoded = encodeURIComponent(shareUrl);
    window.open(
      `https://reddit.com/submit?url=${shareUrlEncoded}&title=${titleEncoded}`,
      '_blank',
      'width=550,height=420'
    );
  }
  
  // Native Web Share API (mobile browsers)
  async function nativeShare() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: shareUrl
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    }
  }
  
  // Check if native sharing is available
  $: canShare = browser && navigator.share;
</script>

<div class="share-buttons">
  {#if variant === 'floating'}
    <!-- Floating variant -->
    <div class="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 bg-slate-800/90 backdrop-blur-sm rounded-full p-2 border border-slate-700/50">
      <div class="flex flex-col gap-2">
        <!-- Native Share (Mobile) -->
        {#if canShare}
          <button
            on:click={nativeShare}
            class="share-button {sizeClasses[size]} bg-blue-600 hover:bg-blue-700"
            title="Share"
            aria-label="Share via system"
          >
            <svg class="{iconSizes[size]}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
          </button>
        {:else}
          <!-- Twitter/X -->
          <button
            on:click={shareOnTwitter}
            class="share-button {sizeClasses[size]} bg-slate-700 hover:bg-blue-500"
            title="Share on X (Twitter)"
            aria-label="Share on X"
          >
            <svg class="{iconSizes[size]}" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </button>
          
          <!-- Facebook -->
          <button
            on:click={shareOnFacebook}
            class="share-button {sizeClasses[size]} bg-slate-700 hover:bg-blue-600"
            title="Share on Facebook"
            aria-label="Share on Facebook"
          >
            <svg class="{iconSizes[size]}" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </button>
          
          <!-- LinkedIn -->
          <button
            on:click={shareOnLinkedIn}
            class="share-button {sizeClasses[size]} bg-slate-700 hover:bg-blue-700"
            title="Share on LinkedIn"
            aria-label="Share on LinkedIn"
          >
            <svg class="{iconSizes[size]}" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </button>
          
          <!-- Reddit -->
          <button
            on:click={shareOnReddit}
            class="share-button {sizeClasses[size]} bg-slate-700 hover:bg-orange-600"
            title="Share on Reddit"
            aria-label="Share on Reddit"
          >
            <svg class="{iconSizes[size]}" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
            </svg>
          </button>
        {/if}
        
        <!-- Copy Link -->
        <button
          on:click={copyToClipboard}
          class="share-button {sizeClasses[size]} {copied ? 'bg-green-600' : 'bg-slate-700 hover:bg-slate-600'}"
          title={copied ? 'Copied!' : 'Copy link'}
          aria-label="Copy link to clipboard"
        >
          {#if copied}
            <svg class="{iconSizes[size]}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          {:else}
            <svg class="{iconSizes[size]}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          {/if}
        </button>
      </div>
    </div>
  {:else}
    <!-- Default and minimal variants -->
    <div class="flex flex-row items-center gap-3">
      {#if variant !== 'minimal' && showLabels}
        <span class="text-sm text-slate-300 font-medium">Share:</span>
      {/if}
      
      <!-- Native Share (Mobile) -->
      {#if canShare}
        <button
          on:click={nativeShare}
          class="share-button {sizeClasses[size]} bg-blue-600 hover:bg-blue-700"
          title="Share"
          aria-label="Share via system"
        >
          <svg class="{iconSizes[size]}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
          </svg>
        </button>
      {:else}
        <!-- Twitter/X -->
        <button
          on:click={shareOnTwitter}
          class="share-button {sizeClasses[size]} bg-slate-700 hover:bg-blue-500"
          title="Share on X (Twitter)"
          aria-label="Share on X"
        >
          <svg class="{iconSizes[size]}" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </button>
        
        <!-- Facebook -->
        <button
          on:click={shareOnFacebook}
          class="share-button {sizeClasses[size]} bg-slate-700 hover:bg-blue-600"
          title="Share on Facebook"
          aria-label="Share on Facebook"
        >
          <svg class="{iconSizes[size]}" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </button>
        
        <!-- LinkedIn -->
        <button
          on:click={shareOnLinkedIn}
          class="share-button {sizeClasses[size]} bg-slate-700 hover:bg-blue-700"
          title="Share on LinkedIn"
          aria-label="Share on LinkedIn"
        >
          <svg class="{iconSizes[size]}" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </button>
        
        <!-- Reddit -->
        <button
          on:click={shareOnReddit}
          class="share-button {sizeClasses[size]} bg-slate-700 hover:bg-orange-600"
          title="Share on Reddit"
          aria-label="Share on Reddit"
        >
          <svg class="{iconSizes[size]}" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
          </svg>
        </button>
      {/if}
      
      <!-- Copy Link -->
      <button
        on:click={copyToClipboard}
        class="share-button {sizeClasses[size]} {copied ? 'bg-green-600' : 'bg-slate-700 hover:bg-slate-600'}"
        title={copied ? 'Copied!' : 'Copy link'}
        aria-label="Copy link to clipboard"
      >
        {#if copied}
          <svg class="{iconSizes[size]}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        {:else}
          <svg class="{iconSizes[size]}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        {/if}
      </button>
    </div>
  {/if}
</div>

<style>
  .share-button {
    @apply rounded-full text-white transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800;
  }
  
  .floating {
    @apply hidden lg:block;
  }
  
  @media (max-width: 1024px) {
    .floating {
      display: none;
    }
  }
</style>

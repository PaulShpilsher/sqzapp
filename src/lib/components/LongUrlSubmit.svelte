<script lang="ts">
  import ShortUrlLink from "./ShortUrlLink.svelte";
  import { getShortCode } from "../sqz-api.service";

  let disabled = false;
  let longUrl = "";
  let promise = Promise.resolve("");

  function submit() {
    promise = getShortCode(longUrl);
    ///disabled = true;
  }
</script>

<div class="long-url-input">
  <input
    type="url"
    class="long-url"
    placeholder="Enter a URL you'd like to shorten"
    bind:value={longUrl}
  />
  <button type="button" on:click={submit} {disabled}>Sqeeze</button>
</div>

{#await promise}
  <p>...waiting</p>
{:then shortCode}
<div class="short-url-link">
  <div>
    <a style="color: blue" href="{window.location.href}{shortCode}">{window.location.host}/{shortCode}</a>
  </div>
</div>
<!-- <ShortUrlLink shortCode={result} /> -->
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

<style>
  .long-url {
    width: 300px;
  }
</style>

<script lang="ts">
  let shortCode: string;
</script>

<div class="short-url-link">
  <div>
    <a href="http://abc.xyz">{`abc.xyz/${shortCode}`}</a>
  </div>
</div>

<style>
  .short-url-link {
    color: blue;
  }
</style>

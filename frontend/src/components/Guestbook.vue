<template>
  <section id="guestbook">
    <div class="container">
      <div class="section-heading">
        <h2>Guestbook</h2>
        <p>Leave a message — say hi, share your thoughts, or just drop a ✦</p>
      </div>
      <div class="gb-layout">

        <!-- Form card -->
        <div class="gb-form-card" id="gb-form-card">
          <div class="wf-tag">&lt;div#gb-form-card&gt;</div>
          <h3>Sign the Guestbook</h3>
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="gb-name">Name</label>
              <input id="gb-name" v-model="name" type="text" placeholder="Your name..." maxlength="60" required />
            </div>
            <div class="form-group">
              <label for="gb-msg">Message</label>
              <textarea id="gb-msg" v-model="message" rows="4" placeholder="What's on your mind..." maxlength="500" required></textarea>
            </div>
            <div v-if="status" class="form-status" :class="status.type">{{ status.text }}</div>
            <button class="form-submit" type="submit" :disabled="submitting">
              <span v-if="submitting" class="spinner"></span>
              {{ submitting ? 'Sending...' : 'Send Message 🚀' }}
            </button>
          </form>
        </div>

        <!-- Messages list -->
        <div class="gb-messages">
          <div v-if="loading" class="gb-empty" style="color:var(--grey)">Loading messages...</div>
          <div v-else-if="messages === null" class="gb-empty" style="color:var(--grey);font-size:.8rem">
            ⚠️ Backend offline. Start Flask server to load messages.
          </div>
          <div v-else-if="messages.length === 0" class="gb-empty">📬 No messages yet. Be the first to sign!</div>
          <div v-else>
            <div v-for="msg in messages" :key="msg.id" class="msg-card">
              <div class="msg-header">
                <span class="msg-author">{{ msg.name }}</span>
                <span class="msg-date">{{ fmtDate(msg.created_at) }}</span>
              </div>
              <p class="msg-text">{{ msg.message }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useGuestbook } from '@/composables/useGuestbook.js'

const { messages, loading, status, loadMessages, postMessage, fmtDate } = useGuestbook()
const name = ref('')
const message = ref('')
const submitting = ref(false)

loadMessages()

async function handleSubmit() {
  if (!name.value.trim() || !message.value.trim()) return
  submitting.value = true
  const ok = await postMessage(name.value.trim(), message.value.trim())
  if (ok) { name.value = ''; message.value = '' }
  submitting.value = false
}
</script>

<style scoped>
#guestbook { background:rgba(22,27,34,.3) }
.gb-layout { display:grid;grid-template-columns:1fr 1fr;gap:2rem }
@media(max-width:700px) { .gb-layout { grid-template-columns:1fr } }
.gb-form-card {
  background:var(--cb);border:1px solid var(--brd);padding:2rem;position:relative;
}
.gb-form-card h3 { font-family:var(--fh);font-size:1rem;font-weight:700;color:var(--m);margin-bottom:1.4rem;text-shadow:0 0 8px var(--gm) }
.form-group { margin-bottom:1.2rem }
.form-group label { display:block;font-family:var(--fh);font-size:.72rem;color:var(--g);letter-spacing:1px;margin-bottom:.45rem;text-transform:uppercase }
.form-group input, .form-group textarea {
  width:100%;background:rgba(13,17,23,.6);border:1px solid rgba(255,0,127,.25);
  color:var(--w);font-family:var(--fb);font-size:.85rem;
  padding:.65rem .9rem;resize:vertical;transition:border-color .2s,box-shadow .2s;
  border-radius:2px;
}
.form-group input:focus, .form-group textarea:focus {
  outline:none;border-color:var(--g);box-shadow:0 0 10px rgba(0,255,65,.2);
}
.form-submit {
  font-family:var(--fh);font-size:.78rem;font-weight:700;letter-spacing:1.5px;
  text-transform:uppercase;color:var(--bg);background:var(--m);border:none;
  padding:.7rem 1.6rem;cursor:pointer;width:100%;margin-top:.5rem;
  clip-path:polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%);
  box-shadow:0 0 14px var(--gm);transition:all .25s;display:flex;
  align-items:center;justify-content:center;gap:.5rem;
}
.form-submit:hover:not(:disabled) { background:var(--g);box-shadow:0 0 20px var(--gg) }
.form-submit:disabled { opacity:.6;cursor:not-allowed }
.form-status { font-size:.8rem;padding:.6rem .9rem;margin-bottom:.8rem;font-family:var(--fh);border-radius:2px }
.form-status.success { background:rgba(0,255,65,.1);border:1px solid rgba(0,255,65,.3);color:var(--g) }
.form-status.error   { background:rgba(255,0,127,.1);border:1px solid rgba(255,0,127,.3);color:var(--m) }
.gb-messages { max-height:520px;overflow-y:auto;display:flex;flex-direction:column;gap:1rem }
.gb-messages::-webkit-scrollbar { width:4px }
.gb-messages::-webkit-scrollbar-track { background:var(--cb) }
.gb-messages::-webkit-scrollbar-thumb { background:var(--m);border-radius:2px }
.msg-card { background:var(--cb);border:1px solid rgba(255,0,127,.15);padding:1rem 1.2rem;border-radius:2px }
.msg-card:hover { border-color:rgba(255,0,127,.4) }
.msg-header { display:flex;justify-content:space-between;margin-bottom:.4rem }
.msg-author { font-family:var(--fh);font-size:.78rem;color:var(--g);text-shadow:0 0 6px var(--gg) }
.msg-date { font-size:.72rem;color:var(--grey) }
.msg-text { font-size:.85rem;color:var(--w);white-space:pre-wrap }
.gb-empty { color:var(--grey);font-size:.85rem;text-align:center;padding:2rem }
.spinner { display:inline-block;width:14px;height:14px;border:2px solid var(--bg);border-top-color:transparent;border-radius:50%;animation:spin .7s linear infinite }
</style>

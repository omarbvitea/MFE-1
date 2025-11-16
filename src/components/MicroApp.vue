<template>
  <div class="micro-app-1">
    <div class="header">
      <h2>Microfrontend 1</h2>
      <p>Interactive Button Component</p>
    </div>

    <div class="content">
      <div class="demo-section">
        <h3>Button Examples</h3>
        <div class="button-grid">
          <Button @click="handleClick('Primary')">
            Primary Button
          </Button>
          <Button @click="handleClick('Secondary')">
            Secondary Button
          </Button>
          <Button @click="handleClick('Success')">
            Success Button
          </Button>
        </div>
      </div>

      <div class="info-section">
        <h3>About This Microfrontend</h3>
        <p>
          This is Microfrontend 1, which provides reusable button components.
          It demonstrates module federation capabilities with Vue 3.
        </p>
        <div class="stats">
          <div class="stat-card">
            <span class="stat-value">{{ clickCount }}</span>
            <span class="stat-label">Button Clicks</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from './Button.vue'

const clickCount = ref(0)

const handleClick = (type) => {
  clickCount.value++
  console.log(`${type} button clicked! Total clicks: ${clickCount.value}`)
}
</script>

<style scoped>
.micro-app-1 {
  padding: 24px;
  width: 100%;
  min-height: 100vh;
  background: #f5f7fa;
}

.header {
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 2px solid #3498db;
}

.header h2 {
  margin: 0 0 8px 0;
  color: #2c3e50;
  font-size: 32px;
  font-weight: 700;
}

.header p {
  margin: 0;
  color: #666;
  font-size: 16px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.demo-section, .info-section {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.demo-section h3, .info-section h3 {
  margin: 0 0 20px 0;
  color: #333;
  font-size: 20px;
  font-weight: 600;
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.info-section p {
  color: #666;
  line-height: 1.6;
  margin: 0 0 20px 0;
}

.stats {
  display: flex;
  gap: 16px;
}

.stat-card {
  flex: 1;
  background: #3498db;
  color: white;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.stat-value {
  font-size: 36px;
  font-weight: 700;
  display: block;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 14px;
  opacity: 0.9;
}
</style>

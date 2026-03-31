// ============================================================
// HELPER FUNCTIONS (Grace's scaffolding tools)
// ============================================================

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function choose(condition, ifTrue, ifFalse) {
  return condition ? ifTrue : ifFalse;
}

function logToConsole(message) {
  const consoleOutput = document.getElementById('console-output');
  if (consoleOutput) {
    const line = document.createElement('div');
    line.className = 'log-line';
    line.textContent = '> ' + message;
    consoleOutput.appendChild(line);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
  }
}

function updateDisplay() {
  const nameEl = document.getElementById('robot-name');
  const modelEl = document.getElementById('robot-model');
  const yearEl = document.getElementById('robot-year');
  const energyEl = document.getElementById('energy-level');
  const energyBarEl = document.getElementById('energy-bar');
  const tasksEl = document.getElementById('tasks-done');
  const statusEl = document.getElementById('status-message');
  const challengeEl = document.getElementById('challenge-number');
  const moodEl = document.getElementById('current-mood');

  if (nameEl) nameEl.textContent = robotName;
  if (modelEl) modelEl.textContent = modelNumber;
  if (yearEl) yearEl.textContent = creationYear;

  if (energyEl) {
    energyEl.textContent = energyLevel;
    if (energyBarEl) {
      energyBarEl.style.width = energyLevel + '%';
      if (energyLevel > 50) {
        energyBarEl.style.backgroundColor = 'hsl(142, 71%, 45%)';
      } else if (energyLevel > 25) {
        energyBarEl.style.backgroundColor = 'hsl(45, 93%, 47%)';
      } else {
        energyBarEl.style.backgroundColor = 'hsl(0, 84%, 60%)';
      }
    }
  }
  if (tasksEl) tasksEl.textContent = tasksDone;
  if (statusEl) statusEl.textContent = statusMessage;
  if (challengeEl) challengeEl.textContent = todaysChallenge;
  if (moodEl) moodEl.textContent = currentMood;
}

// ============================================================
// ROBOT FACTS (const - these never change)
// ============================================================
const robotName = 'HyBit A. ProtoBot';
const modelNumber = 'HAP-7000';
const creationYear = 2024;

// ============================================================
// ROBOT STATUS (let - these change during operation)
// ============================================================
let energyLevel = 100;
let tasksDone = 0;
let statusMessage = 'Ready to learn!';

// ============================================================
// DYNAMIC VALUES (using helper functions)
// ============================================================
let todaysChallenge = randomBetween(1, 10);
let currentMood = choose(energyLevel > 50, 'Energized!', 'Need rest...');

// ============================================================
// COMPLETE TASK
// ============================================================
function completeTask() {
  if (energyLevel < 15) {
    statusMessage = 'Too tired! Need rest first.';
    updateDisplay();
    logToConsole('Cannot complete task - energy too low!');
    return;
  }

  const energyCost = 15;
  energyLevel = energyLevel - energyCost;
  tasksDone = tasksDone + 1;
  todaysChallenge = randomBetween(1, 10);
  currentMood = choose(energyLevel > 50, 'Energized!', 'Getting tired...');
  statusMessage = `Completed task #${tasksDone}!`;
  updateDisplay();
  logToConsole(`Task completed! Energy: ${energyLevel}, Tasks: ${tasksDone}`);
}

// ============================================================
// REST
// ============================================================
function takeRest() {
  const restAmount = 25;
  energyLevel = energyLevel + restAmount;
  if (energyLevel > 100) {
    energyLevel = 100;
  }
  currentMood = choose(energyLevel > 50, 'Energized!', 'Recovering...');
  statusMessage = 'Feeling refreshed!';
  updateDisplay();
  logToConsole(`Rested! Energy restored to: ${energyLevel}`);
}

// ============================================================
// INITIALIZATION
// ============================================================
logToConsole('=== Robot ID Card ===');
logToConsole(`Name: ${robotName}`);
logToConsole(`Model: ${modelNumber}`);
logToConsole(`Energy: ${energyLevel}`);
logToConsole(`Challenge: ${todaysChallenge}`);
logToConsole('Ready to learn!');
updateDisplay();

// Wire up buttons
document.getElementById('btn-task').addEventListener('click', completeTask);
document.getElementById('btn-rest').addEventListener('click', takeRest);

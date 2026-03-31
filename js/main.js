// ============================================================
// ROBOT DATA
// ============================================================
const robots = {
  'hap-7000': {
    name: 'HyBit A. ProtoBot',
    model: 'HAP-7000',
    commissioned: 2024,
    commissionedLabel: 'Created',
    trait: 'Curious apprentice',
  },
  'GRACE-001': {
    name: 'Grace Hopper',
    model: 'GRACE-001 ',
    commissioned: 1944,
    commissionedLabel: 'Commissioned',
    trait: 'Precise and formal',
  },
  'prof-t-5000': {
    name: 'Prof. Teeters',
    model: 'PROF-T-5000',
    commissioned: 2018,
    commissionedLabel: 'Hired',
    trait: 'Calm mentor',
  },
};

// Notes storage — keyed by robot id
const robotNotes = {};

// Counter for dynamically added robots
let nextRobotNumber = 1;

// ============================================================
// DOM REFERENCES
// ============================================================
const cardContainer = document.getElementById('card-container');
const cardListView = document.getElementById('card-list-view');
const detailView = document.getElementById('detail-view');
const detailContent = document.getElementById('detail-content');
const notesList = document.getElementById('notes-list');
const notesForm = document.getElementById('notes-form');
const noteInput = document.getElementById('note-input');
const backBtn = document.getElementById('back-btn');
const addCardBtn = document.getElementById('add-card-btn');
const consoleOutput = document.getElementById('console-output');

// Track which robot is currently displayed in detail view
let currentRobotId = null;

// ============================================================
// HELPER: log to the on-page console
// ============================================================
function logToConsole(message, eventType) {
  const line = document.createElement('div');
  line.className = 'log-line';

  if (eventType) {
    const badge = document.createElement('span');
    badge.className = 'console-event-type';
    badge.textContent = eventType;
    line.appendChild(badge);

    const text = document.createElement('span');
    text.textContent = ' ' + message;
    line.appendChild(text);
  } else {
    line.textContent = '> ' + message;
  }

  consoleOutput.appendChild(line);
  consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

// ============================================================
// HELPER: build a robot card element (used for dynamic adds)
// ============================================================
function createCardElement(id, robot) {
  const card = document.createElement('div');
  card.className = 'robot-card';
  card.dataset.robotId = id;
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', 'View details for ' + robot.name);

  // Card header
  const header = document.createElement('div');
  header.className = 'card-header';
  const icon = document.createElement('span');
  icon.className = 'robot-icon';
  icon.setAttribute('aria-hidden', 'true');
  icon.textContent = '\u{1F916}';
  const h2 = document.createElement('h2');
  h2.textContent = 'Robot ID Card';
  header.appendChild(icon);
  header.appendChild(h2);
  card.appendChild(header);

  // Identity section
  const identitySection = document.createElement('section');
  identitySection.className = 'card-section';
  const identityH3 = document.createElement('h3');
  identityH3.textContent = 'Identity';
  identitySection.appendChild(identityH3);

  const rows = [
    ['\u{1F4DB}', 'Name', robot.name],
    ['\u{1F527}', 'Model', robot.model],
    [
      '\u{1F4C5}',
      robot.commissionedLabel || 'Created',
      String(robot.commissioned),
    ],
  ];

  for (const [emoji, label, value] of rows) {
    const row = document.createElement('div');
    row.className = 'info-row';

    const labelSpan = document.createElement('span');
    labelSpan.className = 'label';
    const emojiSpan = document.createElement('span');
    emojiSpan.setAttribute('aria-hidden', 'true');
    emojiSpan.textContent = emoji;
    labelSpan.appendChild(emojiSpan);
    labelSpan.appendChild(document.createTextNode(' ' + label));

    const valueSpan = document.createElement('span');
    valueSpan.className = 'value';
    valueSpan.textContent = value;

    row.appendChild(labelSpan);
    row.appendChild(valueSpan);
    identitySection.appendChild(row);
  }
  card.appendChild(identitySection);

  // Personality section
  const traitSection = document.createElement('section');
  traitSection.className = 'card-section';
  const traitH3 = document.createElement('h3');
  traitH3.textContent = 'Personality';
  traitSection.appendChild(traitH3);

  const traitRow = document.createElement('div');
  traitRow.className = 'info-row';
  const traitLabel = document.createElement('span');
  traitLabel.className = 'label';
  const traitEmoji = document.createElement('span');
  traitEmoji.setAttribute('aria-hidden', 'true');
  traitEmoji.textContent = '\u2728';
  traitLabel.appendChild(traitEmoji);
  traitLabel.appendChild(document.createTextNode(' Trait'));
  const traitValue = document.createElement('span');
  traitValue.className = 'value';
  traitValue.textContent = robot.trait;
  traitRow.appendChild(traitLabel);
  traitRow.appendChild(traitValue);
  traitSection.appendChild(traitRow);
  card.appendChild(traitSection);

  return card;
}

// ============================================================
// VIEW SWITCHING (Station 3: classList + hidden)
// ============================================================
function showDetailView(robotId) {
  const robot = robots[robotId];
  if (!robot) return;

  currentRobotId = robotId;

  // Build detail content using createElement + textContent
  while (detailContent.firstChild) {
    detailContent.removeChild(detailContent.firstChild);
  }

  const detailCard = document.createElement('div');
  detailCard.className = 'robot-card robot-card--active';

  const header = document.createElement('div');
  header.className = 'card-header';
  const icon = document.createElement('span');
  icon.className = 'robot-icon';
  icon.setAttribute('aria-hidden', 'true');
  icon.textContent = '\u{1F916}';
  const h2 = document.createElement('h2');
  h2.textContent = robot.name;
  header.appendChild(icon);
  header.appendChild(h2);
  detailCard.appendChild(header);

  const section = document.createElement('section');
  section.className = 'card-section';
  const sectionH3 = document.createElement('h3');
  sectionH3.textContent = 'Full profile';
  section.appendChild(sectionH3);

  const details = [
    ['\u{1F4DB}', 'Name', robot.name],
    ['\u{1F527}', 'Model', robot.model],
    [
      '\u{1F4C5}',
      robot.commissionedLabel || 'Created',
      String(robot.commissioned),
    ],
    ['\u2728', 'Trait', robot.trait],
  ];

  for (const [emoji, label, value] of details) {
    const row = document.createElement('div');
    row.className = 'info-row';

    const labelSpan = document.createElement('span');
    labelSpan.className = 'label';
    const emojiSpan = document.createElement('span');
    emojiSpan.setAttribute('aria-hidden', 'true');
    emojiSpan.textContent = emoji;
    labelSpan.appendChild(emojiSpan);
    labelSpan.appendChild(document.createTextNode(' ' + label));

    const valueSpan = document.createElement('span');
    valueSpan.className = 'value';
    valueSpan.textContent = value;

    row.appendChild(labelSpan);
    row.appendChild(valueSpan);
    section.appendChild(row);
  }
  detailCard.appendChild(section);
  detailContent.appendChild(detailCard);

  // Render existing notes
  renderNotes(robotId);

  // Switch views
  cardListView.classList.add('hidden');
  detailView.classList.remove('hidden');

  noteInput.focus();
}

function showCardListView() {
  detailView.classList.add('hidden');
  cardListView.classList.remove('hidden');
  currentRobotId = null;
}

// ============================================================
// NOTES (Station 3: form submit + preventDefault)
// ============================================================
function renderNotes(robotId) {
  while (notesList.firstChild) {
    notesList.removeChild(notesList.firstChild);
  }

  const notes = robotNotes[robotId] || [];
  for (const note of notes) {
    const noteEl = document.createElement('div');
    noteEl.className = 'note-item';
    noteEl.textContent = note;
    notesList.appendChild(noteEl);
  }
}

function handleNoteSubmit(event) {
  event.preventDefault();

  logToConsole(
    'submit event on FORM#notes-form, preventDefault() called',
    'submit'
  );

  const noteText = noteInput.value.trim();
  if (!noteText || !currentRobotId) return;

  if (!robotNotes[currentRobotId]) {
    robotNotes[currentRobotId] = [];
  }
  robotNotes[currentRobotId].push(noteText);

  renderNotes(currentRobotId);
  noteInput.value = '';
  noteInput.focus();

  logToConsole('Note saved for ' + currentRobotId + ': "' + noteText + '"');
}

// ============================================================
// EVENT DELEGATION (Station 4: bubbling + closest)
// ============================================================
function handleCardClick(event) {
  const card = event.target.closest('.robot-card');
  if (!card) return;

  const robotId = card.dataset.robotId;

  logToConsole(
    "click on .robot-card[data-robot-id='" +
      robotId +
      "'], target: " +
      event.target.tagName +
      ', currentTarget: ' +
      event.currentTarget.tagName +
      '#' +
      event.currentTarget.id,
    'click'
  );

  showDetailView(robotId);
}

// ============================================================
// KEYBOARD SUPPORT for card activation
// ============================================================
function handleCardKeydown(event) {
  if (event.key !== 'Enter' && event.key !== ' ') return;

  const card = event.target.closest('.robot-card');
  if (!card) return;

  event.preventDefault();
  const robotId = card.dataset.robotId;

  logToConsole(
    "keydown ('" +
      event.key +
      "') on .robot-card[data-robot-id='" +
      robotId +
      "']",
    'keydown'
  );

  showDetailView(robotId);
}

// ============================================================
// BACK BUTTON
// ============================================================
function handleBackClick() {
  logToConsole('click on #back-btn, switching to card list view', 'click');
  showCardListView();
}

// ============================================================
// ADD NEW ROBOT (Station 4: proves delegation works)
// ============================================================
function handleAddCard() {
  const id = 'bot-' + String(nextRobotNumber).padStart(4, '0');
  const robot = {
    name: 'NewBot-' + nextRobotNumber,
    model: id.toUpperCase(),
    commissioned: new Date().getFullYear(),
    trait: 'Freshly activated',
  };

  robots[id] = robot;
  nextRobotNumber += 1;

  const card = createCardElement(id, robot);
  cardContainer.appendChild(card);

  logToConsole(
    'New card added: ' +
      robot.name +
      '. No new listener needed — delegation handles it.',
    'click'
  );
}

// ============================================================
// REGISTER ALL EVENT LISTENERS (Station 1: addEventListener)
// ============================================================
cardContainer.addEventListener('click', handleCardClick);
logToConsole('Registered click listener on #card-container (delegation)');

cardContainer.addEventListener('keydown', handleCardKeydown);
logToConsole('Registered keydown listener on #card-container (delegation)');

notesForm.addEventListener('submit', handleNoteSubmit);
logToConsole('Registered submit listener on #notes-form');

backBtn.addEventListener('click', handleBackClick);
addCardBtn.addEventListener('click', handleAddCard);
logToConsole('Registered click listeners on #back-btn and #add-card-btn');

logToConsole('=== Robot ID Card App ready ===');

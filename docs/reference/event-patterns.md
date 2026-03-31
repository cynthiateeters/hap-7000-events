# Event patterns reference

Quick reference of every event pattern demonstrated in this app, mapped to the Learning Lab station where HAP learns it.

## Station 1: addEventListener + callbacks

All interactivity uses `addEventListener` with named callback functions.

```javascript
cardContainer.addEventListener("click", handleCardClick);
notesForm.addEventListener("submit", handleNoteSubmit);
backBtn.addEventListener("click", handleBackClick);
addCardBtn.addEventListener("click", handleAddCard);
```

No `onclick`, `onsubmit`, or any `on*` property assignments.

## Station 2: event object

Every handler logs `event.type`, `event.target`, and `event.currentTarget` to the on-page console.

```javascript
function handleCardClick(event) {
  const card = event.target.closest(".robot-card");
  // event.target — the element that was actually clicked
  // event.currentTarget — the element the listener is on (#card-container)
}
```

## Station 3: view switching + forms + preventDefault

View switching uses `classList.add('hidden')` and `classList.remove('hidden')`:

```javascript
cardListView.classList.add("hidden");
detailView.classList.remove("hidden");
```

Form submission uses `addEventListener('submit', ...)` on the form element (not the button) and calls `event.preventDefault()` to stop page reload:

```javascript
notesForm.addEventListener("submit", handleNoteSubmit);

function handleNoteSubmit(event) {
  event.preventDefault();
  // read input, save note, update display
}
```

## Station 4: bubbling + delegation

One event listener on `#card-container` handles clicks for all cards, including dynamically added ones:

```javascript
cardContainer.addEventListener("click", handleCardClick);

function handleCardClick(event) {
  const card = event.target.closest(".robot-card");
  if (!card) return;
  const robotId = card.dataset.robotId;
  // handle the click
}
```

The "Add New Robot" button appends a new card to the container. No new listener is needed — delegation handles it automatically.

## Station 5: combined patterns

The whole app combines all patterns into a mini SPA:

- Card list with delegation (Station 4)
- Click-to-detail view swap (Station 3)
- Back button (Station 3)
- Notes form with preventDefault (Station 3)
- Dynamic card creation (Station 4)

## Station 6: defense in depth

All DOM construction uses `createElement` + `textContent`. No `innerHTML` anywhere.

```javascript
const line = document.createElement("div");
line.className = "log-line";
line.textContent = "> " + message;
consoleOutput.appendChild(line);
```

The AGENTS.md file includes rules that prevent unsafe patterns:

- Use `addEventListener` exclusively
- Use event delegation on containers
- Use `createElement` + `textContent` for DOM construction
- Use `classList` for visibility toggling

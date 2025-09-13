// Python Syntax Cards Data
const pythonCards = [
    // Lists
    {
        id: 1,
        type: 'list',
        title: 'Lists',
        subtitle: 'Ordered, Mutable Collections',
        icon: '📋',
        description: 'Lists are ordered collections of items that can be modified. They are one of the most commonly used data structures in Python.',
        syntax: `<span class="keyword">my_list</span> = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>]
<span class="keyword">fruits</span> = [<span class="string">"apple"</span>, <span class="string">"banana"</span>, <span class="string">"orange"</span>]
<span class="keyword">mixed</span> = [<span class="number">1</span>, <span class="string">"hello"</span>, <span class="keyword">True</span>]`,
        features: [
            'Ordered collection of items',
            'Items can be of different types',
            'Mutable (can be changed)',
            'Supports indexing and slicing',
            'Can contain duplicates'
        ]
    },
    {
        id: 2,
        type: 'list',
        title: 'List Operations',
        subtitle: 'Adding & Removing Items',
        icon: '➕',
        description: 'Learn how to add, remove, and modify items in lists.',
        syntax: `<span class="keyword">fruits</span> = [<span class="string">"apple"</span>, <span class="string">"banana"</span>]

<span class="comment"># Adding items</span>
<span class="keyword">fruits</span>.<span class="keyword">append</span>(<span class="string">"orange"</span>)  <span class="comment"># Add to end</span>
<span class="keyword">fruits</span>.<span class="keyword">insert</span>(<span class="number">1</span>, <span class="string">"grape"</span>)  <span class="comment"># Insert at index</span>
<span class="keyword">fruits</span>.<span class="keyword">extend</span>([<span class="string">"kiwi"</span>, <span class="string">"mango"</span>])  <span class="comment"># Add multiple</span>

<span class="comment"># Removing items</span>
<span class="keyword">fruits</span>.<span class="keyword">remove</span>(<span class="string">"banana"</span>)  <span class="comment"># Remove by value</span>
<span class="keyword">fruits</span>.<span class="keyword">pop</span>()  <span class="comment"># Remove last item</span>
<span class="keyword">fruits</span>.<span class="keyword">pop</span>(<span class="number">0</span>)  <span class="comment"># Remove by index</span>`,
        features: [
            'append() - Add item to end',
            'insert() - Add item at specific position',
            'extend() - Add multiple items',
            'remove() - Remove by value',
            'pop() - Remove by index'
        ]
    },
    {
        id: 3,
        type: 'list',
        title: 'List Sorting',
        subtitle: 'Organizing Your Data',
        icon: '🔄',
        description: 'Sort lists in ascending or descending order, and sort by custom criteria.',
        syntax: `<span class="keyword">numbers</span> = [<span class="number">3</span>, <span class="number">1</span>, <span class="number">4</span>, <span class="number">1</span>, <span class="number">5</span>]
<span class="keyword">fruits</span> = [<span class="string">"banana"</span>, <span class="string">"apple"</span>, <span class="string">"cherry"</span>]

<span class="comment"># Sort in place (modifies original)</span>
<span class="keyword">numbers</span>.<span class="keyword">sort</span>()  <span class="comment"># Ascending</span>
<span class="keyword">numbers</span>.<span class="keyword">sort</span>(<span class="keyword">reverse</span>=<span class="keyword">True</span>)  <span class="comment"># Descending</span>

<span class="comment"># Create new sorted list</span>
<span class="keyword">sorted_numbers</span> = <span class="keyword">sorted</span>(<span class="keyword">numbers</span>)
<span class="keyword">sorted_fruits</span> = <span class="keyword">sorted</span>(<span class="keyword">fruits</span>, <span class="keyword">reverse</span>=<span class="keyword">True</span>)`,
        features: [
            'sort() - Modifies original list',
            'sorted() - Returns new sorted list',
            'reverse=True for descending order',
            'Works with strings and numbers',
            'Custom sorting with key parameter'
        ]
    },
    
    // Dictionaries
    {
        id: 4,
        type: 'dict',
        title: 'Dictionaries',
        subtitle: 'Key-Value Pairs',
        icon: '📚',
        description: 'Dictionaries store data as key-value pairs. They are unordered, mutable, and very efficient for lookups.',
        syntax: `<span class="keyword">person</span> = {
    <span class="string">"name"</span>: <span class="string">"Alice"</span>,
    <span class="string">"age"</span>: <span class="number">30</span>,
    <span class="string">"city"</span>: <span class="string">"New York"</span>
}

<span class="keyword">scores</span> = {<span class="string">"math"</span>: <span class="number">95</span>, <span class="string">"science"</span>: <span class="number">87</span>}
<span class="keyword">empty_dict</span> = {}  <span class="comment"># Empty dictionary</span>`,
        features: [
            'Key-value pairs',
            'Keys must be unique',
            'Unordered (Python 3.7+)',
            'Mutable and dynamic',
            'Very fast lookups'
        ]
    },
    {
        id: 5,
        type: 'dict',
        title: 'Dictionary Operations',
        subtitle: 'Accessing & Modifying',
        icon: '🔧',
        description: 'Learn how to access, modify, and manipulate dictionary data.',
        syntax: `<span class="keyword">person</span> = {<span class="string">"name"</span>: <span class="string">"Alice"</span>, <span class="string">"age"</span>: <span class="number">30</span>}

<span class="comment"># Accessing values</span>
<span class="keyword">name</span> = <span class="keyword">person</span>[<span class="string">"name"</span>]  <span class="comment"># Direct access</span>
<span class="keyword">age</span> = <span class="keyword">person</span>.<span class="keyword">get</span>(<span class="string">"age"</span>)  <span class="comment"># Safe access</span>
<span class="keyword">city</span> = <span class="keyword">person</span>.<span class="keyword">get</span>(<span class="string">"city"</span>, <span class="string">"Unknown"</span>)  <span class="comment"># Default value</span>

<span class="comment"># Modifying values</span>
<span class="keyword">person</span>[<span class="string">"age"</span>] = <span class="number">31</span>  <span class="comment"># Update existing</span>
<span class="keyword">person</span>[<span class="string">"city"</span>] = <span class="string">"Boston"</span>  <span class="comment"># Add new key</span>

<span class="comment"># Removing items</span>
<span class="keyword">del</span> <span class="keyword">person</span>[<span class="string">"age"</span>]  <span class="comment"># Remove key</span>
<span class="keyword">city</span> = <span class="keyword">person</span>.<span class="keyword">pop</span>(<span class="string">"city"</span>)  <span class="comment"># Remove and return</span>`,
        features: [
            'Direct access with []',
            'Safe access with get()',
            'Default values for missing keys',
            'Add/update with assignment',
            'Remove with del or pop()'
        ]
    },
    
    // Sets
    {
        id: 6,
        type: 'set',
        title: 'Sets',
        subtitle: 'Unique Collections',
        icon: '🎯',
        description: 'Sets are unordered collections of unique elements. Perfect for removing duplicates and set operations.',
        syntax: `<span class="keyword">fruits</span> = {<span class="string">"apple"</span>, <span class="string">"banana"</span>, <span class="string">"orange"</span>}
<span class="keyword">numbers</span> = {<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>}
<span class="keyword">empty_set</span> = <span class="keyword">set</span>()  <span class="comment"># Empty set</span>

<span class="comment"># From list (removes duplicates)</span>
<span class="keyword">unique_numbers</span> = <span class="keyword">set</span>([<span class="number">1</span>, <span class="number">2</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">3</span>])`,
        features: [
            'Contains only unique elements',
            'Unordered collection',
            'Mutable (can be changed)',
            'Fast membership testing',
            'Set operations (union, intersection)'
        ]
    },
    {
        id: 7,
        type: 'set',
        title: 'Set Operations',
        subtitle: 'Mathematical Set Operations',
        icon: '🔗',
        description: 'Perform mathematical set operations like union, intersection, and difference.',
        syntax: `<span class="keyword">set1</span> = {<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>}
<span class="keyword">set2</span> = {<span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>, <span class="number">6</span>}

<span class="comment"># Set operations</span>
<span class="keyword">union</span> = <span class="keyword">set1</span> | <span class="keyword">set2</span>  <span class="comment"># All elements</span>
<span class="keyword">intersection</span> = <span class="keyword">set1</span> & <span class="keyword">set2</span>  <span class="comment"># Common elements</span>
<span class="keyword">difference</span> = <span class="keyword">set1</span> - <span class="keyword">set2</span>  <span class="comment"># In set1 but not set2</span>
<span class="keyword">symmetric_diff</span> = <span class="keyword">set1</span> ^ <span class="keyword">set2</span>  <span class="comment"># Elements in either but not both</span>

<span class="comment"># Methods</span>
<span class="keyword">set1</span>.<span class="keyword">add</span>(<span class="number">7</span>)  <span class="comment"># Add element</span>
<span class="keyword">set1</span>.<span class="keyword">remove</span>(<span class="number">1</span>)  <span class="comment"># Remove element</span>`,
        features: [
            'Union (|) - All elements',
            'Intersection (&) - Common elements',
            'Difference (-) - Elements in first set only',
            'Symmetric difference (^) - Unique elements',
            'add() and remove() methods'
        ]
    },
    
    // Tuples
    {
        id: 8,
        type: 'tuple',
        title: 'Tuples',
        subtitle: 'Immutable Sequences',
        icon: '🔒',
        description: 'Tuples are ordered collections that cannot be modified after creation. They are immutable and often used for fixed data.',
        syntax: `<span class="keyword">coordinates</span> = (<span class="number">10</span>, <span class="number">20</span>)
<span class="keyword">colors</span> = (<span class="string">"red"</span>, <span class="string">"green"</span>, <span class="string">"blue"</span>)
<span class="keyword">person_info</span> = (<span class="string">"John"</span>, <span class="number">25</span>, <span class="string">"Engineer"</span>)

<span class="comment"># Single element tuple (note the comma)</span>
<span class="keyword">single</span> = (<span class="number">42</span>,)

<span class="comment"># Empty tuple</span>
<span class="keyword">empty</span> = ()`,
        features: [
            'Ordered collection',
            'Immutable (cannot be changed)',
            'Can contain different data types',
            'Faster than lists',
            'Used for fixed data'
        ]
    },
    
    // Strings
    {
        id: 9,
        type: 'string',
        title: 'String Operations',
        subtitle: 'Text Manipulation',
        icon: '📝',
        description: 'Strings are sequences of characters. Learn common string operations and methods.',
        syntax: `<span class="keyword">text</span> = <span class="string">"Hello, World!"</span>
<span class="keyword">name</span> = <span class="string">"python"</span>

<span class="comment"># Basic operations</span>
<span class="keyword">length</span> = <span class="keyword">len</span>(<span class="keyword">text</span>)  <span class="comment"># Get length</span>
<span class="keyword">upper</span> = <span class="keyword">text</span>.<span class="keyword">upper</span>()  <span class="comment"># Convert to uppercase</span>
<span class="keyword">lower</span> = <span class="keyword">text</span>.<span class="keyword">lower</span>()  <span class="comment"># Convert to lowercase</span>
<span class="keyword">capitalized</span> = <span class="keyword">name</span>.<span class="keyword">capitalize</span>()  <span class="comment"># First letter uppercase</span>

<span class="comment"># Searching and replacing</span>
<span class="keyword">contains</span> = <span class="string">"World"</span> <span class="keyword">in</span> <span class="keyword">text</span>  <span class="comment"># Check if substring exists</span>
<span class="keyword">new_text</span> = <span class="keyword">text</span>.<span class="keyword">replace</span>(<span class="string">"World"</span>, <span class="string">"Python"</span>)`,
        features: [
            'Immutable sequence of characters',
            'len() to get string length',
            'upper() and lower() for case conversion',
            'capitalize() for title case',
            'replace() for text substitution'
        ]
    },
    
    // Numbers
    {
        id: 10,
        type: 'number',
        title: 'Numbers',
        subtitle: 'Integer & Float Operations',
        icon: '🔢',
        description: 'Python supports integers and floating-point numbers with various mathematical operations.',
        syntax: `<span class="comment"># Integer operations</span>
<span class="keyword">a</span> = <span class="number">10</span>
<span class="keyword">b</span> = <span class="number">3</span>

<span class="keyword">sum_result</span> = <span class="keyword">a</span> + <span class="keyword">b</span>  <span class="comment"># Addition</span>
<span class="keyword">diff</span> = <span class="keyword">a</span> - <span class="keyword">b</span>  <span class="comment"># Subtraction</span>
<span class="keyword">product</span> = <span class="keyword">a</span> * <span class="keyword">b</span>  <span class="comment"># Multiplication</span>
<span class="keyword">division</span> = <span class="keyword">a</span> / <span class="keyword">b</span>  <span class="comment"># Float division</span>
<span class="keyword">floor_div</span> = <span class="keyword">a</span> // <span class="keyword">b</span>  <span class="comment"># Floor division</span>
<span class="keyword">remainder</span> = <span class="keyword">a</span> % <span class="keyword">b</span>  <span class="comment"># Modulo</span>
<span class="keyword">power</span> = <span class="keyword">a</span> ** <span class="keyword">b</span>  <span class="comment"># Exponentiation</span>`,
        features: [
            'Integer and float types',
            'Basic arithmetic operations',
            'Floor division (//) for integer results',
            'Modulo (%) for remainders',
            'Power (**) for exponentiation'
        ]
    },
    
    // Advanced Operations
    {
        id: 11,
        type: 'operation',
        title: 'List Comprehensions',
        subtitle: 'Elegant List Creation',
        icon: '✨',
        description: 'List comprehensions provide a concise way to create lists based on existing lists.',
        syntax: `<span class="comment"># Basic list comprehension</span>
<span class="keyword">squares</span> = [<span class="keyword">x</span>**<span class="number">2</span> <span class="keyword">for</span> <span class="keyword">x</span> <span class="keyword">in</span> <span class="keyword">range</span>(<span class="number">10</span>)]

<span class="comment"># With condition</span>
<span class="keyword">even_squares</span> = [<span class="keyword">x</span>**<span class="number">2</span> <span class="keyword">for</span> <span class="keyword">x</span> <span class="keyword">in</span> <span class="keyword">range</span>(<span class="number">10</span>) <span class="keyword">if</span> <span class="keyword">x</span> % <span class="number">2</span> == <span class="number">0</span>]

<span class="comment"># Nested comprehension</span>
<span class="keyword">matrix</span> = [[<span class="keyword">i</span> + <span class="keyword">j</span> <span class="keyword">for</span> <span class="keyword">j</span> <span class="keyword">in</span> <span class="keyword">range</span>(<span class="number">3</span>)] <span class="keyword">for</span> <span class="keyword">i</span> <span class="keyword">in</span> <span class="keyword">range</span>(<span class="number">3</span>)]`,
        features: [
            'Concise way to create lists',
            'More readable than loops',
            'Can include conditions',
            'Supports nested comprehensions',
            'Often faster than traditional loops'
        ]
    },
    {
        id: 12,
        type: 'operation',
        title: 'Dictionary Comprehensions',
        subtitle: 'Creating Dictionaries Elegantly',
        icon: '🎨',
        description: 'Create dictionaries using comprehension syntax for clean, readable code.',
        syntax: `<span class="comment"># Basic dictionary comprehension</span>
<span class="keyword">squares_dict</span> = {<span class="keyword">x</span>: <span class="keyword">x</span>**<span class="number">2</span> <span class="keyword">for</span> <span class="keyword">x</span> <span class="keyword">in</span> <span class="keyword">range</span>(<span class="number">5</span>)}

<span class="comment"># From existing dictionary</span>
<span class="keyword">original</span> = {<span class="string">"a"</span>: <span class="number">1</span>, <span class="string">"b"</span>: <span class="number">2</span>, <span class="string">"c"</span>: <span class="number">3</span>}
<span class="keyword">doubled</span> = {<span class="keyword">k</span>: <span class="keyword">v</span>*<span class="number">2</span> <span class="keyword">for</span> <span class="keyword">k</span>, <span class="keyword">v</span> <span class="keyword">in</span> <span class="keyword">original</span>.<span class="keyword">items</span>()}

<span class="comment"># With condition</span>
<span class="keyword">filtered</span> = {<span class="keyword">k</span>: <span class="keyword">v</span> <span class="keyword">for</span> <span class="keyword">k</span>, <span class="keyword">v</span> <span class="keyword">in</span> <span class="keyword">original</span>.<span class="keyword">items</span>() <span class="keyword">if</span> <span class="keyword">v</span> > <span class="number">1</span>}`,
        features: [
            'Create dictionaries from iterables',
            'Transform existing dictionaries',
            'Include conditions for filtering',
            'More readable than loops',
            'Efficient and Pythonic'
        ]
    }
];

// App State
let currentCardIndex = 0;
let score = 0;
let isAnimating = false;

// DOM Elements
const cardContainer = document.getElementById('cardContainer');
const progressFill = document.getElementById('progressFill');
const currentCardSpan = document.getElementById('currentCard');
const totalCardsSpan = document.getElementById('totalCards');
const scoreSpan = document.getElementById('score');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const cardIndicators = document.getElementById('cardIndicators');
const swipeInstructions = document.getElementById('swipeInstructions');
const modalOverlay = document.getElementById('modalOverlay');
const finalScoreSpan = document.getElementById('finalScore');
const cardsCompletedSpan = document.getElementById('cardsCompleted');
const restartBtn = document.getElementById('restartBtn');

// Initialize App
function initApp() {
    totalCardsSpan.textContent = pythonCards.length;
    createCards();
    createIndicators();
    updateUI();
    hideInstructionsAfterDelay();
}

// Create Card Elements
function createCards() {
    pythonCards.forEach((cardData, index) => {
        const card = createCardElement(cardData, index);
        cardContainer.appendChild(card);
    });
}

// Create Individual Card Element
function createCardElement(cardData, index) {
    const card = document.createElement('div');
    card.className = `card ${cardData.type}`;
    card.dataset.index = index;
    
    if (index === 0) {
        card.classList.add('active');
    } else if (index === 1) {
        card.classList.add('next');
    } else if (index === pythonCards.length - 1 && pythonCards.length > 1) {
        card.classList.add('prev');
    }
    
    card.innerHTML = `
        <div class="card-header">
            <div class="card-icon">${cardData.icon}</div>
            <div>
                <div class="card-title">${cardData.title}</div>
                <div class="card-subtitle">${cardData.subtitle}</div>
            </div>
        </div>
        <div class="card-content">
            <div class="description">${cardData.description}</div>
            <div class="syntax-example">${cardData.syntax}</div>
            <ul class="features">
                ${cardData.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
    `;
    
    return card;
}

// Create Progress Indicators
function createIndicators() {
    pythonCards.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        if (index === 0) indicator.classList.add('active');
        cardIndicators.appendChild(indicator);
    });
}

// Update UI Elements
function updateUI() {
    const progress = ((currentCardIndex + 1) / pythonCards.length) * 100;
    progressFill.style.width = `${progress}%`;
    currentCardSpan.textContent = currentCardIndex + 1;
    scoreSpan.textContent = score;
    
    // Update indicators
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentCardIndex);
    });
    
    // Update navigation buttons
    prevBtn.disabled = currentCardIndex === 0;
    nextBtn.disabled = currentCardIndex === pythonCards.length - 1;
    
    // Update card positions
    updateCardPositions();
}

// Update Card Positions
function updateCardPositions() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.classList.remove('active', 'prev', 'next');
        
        if (index === currentCardIndex) {
            card.classList.add('active');
        } else if (index === currentCardIndex - 1) {
            card.classList.add('prev');
        } else if (index === currentCardIndex + 1) {
            card.classList.add('next');
        }
    });
}

// Navigation Functions
function goToNextCard() {
    if (currentCardIndex < pythonCards.length - 1 && !isAnimating) {
        isAnimating = true;
        currentCardIndex++;
        score += 10; // Award points for progress
        updateUI();
        
        setTimeout(() => {
            isAnimating = false;
            checkCompletion();
        }, 300);
    }
}

function goToPrevCard() {
    if (currentCardIndex > 0 && !isAnimating) {
        isAnimating = true;
        currentCardIndex--;
        updateUI();
        
        setTimeout(() => {
            isAnimating = false;
        }, 300);
    }
}

// Touch/Swipe Handling
let startX = 0;
let startY = 0;
let isDragging = false;

function handleTouchStart(e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isDragging = true;
    
    const activeCard = document.querySelector('.card.active');
    if (activeCard) {
        activeCard.classList.add('touch-feedback');
    }
}

function handleTouchMove(e) {
    if (!isDragging) return;
    
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = currentX - startX;
    const diffY = currentY - startY;
    
    // Only handle horizontal swipes
    if (Math.abs(diffX) > Math.abs(diffY)) {
        e.preventDefault();
        
        const activeCard = document.querySelector('.card.active');
        if (activeCard) {
            if (diffX > 0) {
                activeCard.classList.add('swiping-right');
                activeCard.classList.remove('swiping-left');
            } else {
                activeCard.classList.add('swiping-left');
                activeCard.classList.remove('swiping-right');
            }
        }
    }
}

function handleTouchEnd(e) {
    if (!isDragging) return;
    
    isDragging = false;
    const currentX = e.changedTouches[0].clientX;
    const diffX = currentX - startX;
    const threshold = 50;
    
    const activeCard = document.querySelector('.card.active');
    if (activeCard) {
        activeCard.classList.remove('touch-feedback', 'swiping-left', 'swiping-right');
    }
    
    if (Math.abs(diffX) > threshold) {
        if (diffX > 0) {
            goToPrevCard();
        } else {
            goToNextCard();
        }
    }
}

// Mouse Drag Support
function handleMouseDown(e) {
    startX = e.clientX;
    startY = e.clientY;
    isDragging = true;
    
    const activeCard = document.querySelector('.card.active');
    if (activeCard) {
        activeCard.classList.add('touch-feedback');
    }
}

function handleMouseMove(e) {
    if (!isDragging) return;
    
    const currentX = e.clientX;
    const currentY = e.clientY;
    const diffX = currentX - startX;
    const diffY = currentY - startY;
    
    if (Math.abs(diffX) > Math.abs(diffY)) {
        e.preventDefault();
        
        const activeCard = document.querySelector('.card.active');
        if (activeCard) {
            if (diffX > 0) {
                activeCard.classList.add('swiping-right');
                activeCard.classList.remove('swiping-left');
            } else {
                activeCard.classList.add('swiping-left');
                activeCard.classList.remove('swiping-right');
            }
        }
    }
}

function handleMouseUp(e) {
    if (!isDragging) return;
    
    isDragging = false;
    const currentX = e.clientX;
    const diffX = currentX - startX;
    const threshold = 50;
    
    const activeCard = document.querySelector('.card.active');
    if (activeCard) {
        activeCard.classList.remove('touch-feedback', 'swiping-left', 'swiping-right');
    }
    
    if (Math.abs(diffX) > threshold) {
        if (diffX > 0) {
            goToPrevCard();
        } else {
            goToNextCard();
        }
    }
}

// Keyboard Navigation
function handleKeyPress(e) {
    if (isAnimating) return;
    
    switch(e.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
            e.preventDefault();
            goToPrevCard();
            break;
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
            e.preventDefault();
            goToNextCard();
            break;
        case 'Escape':
            if (modalOverlay.classList.contains('show')) {
                hideModal();
            }
            break;
    }
}

// Completion Check
function checkCompletion() {
    if (currentCardIndex === pythonCards.length - 1) {
        setTimeout(() => {
            showCompletionModal();
        }, 500);
    }
}

// Show Completion Modal
function showCompletionModal() {
    finalScoreSpan.textContent = score;
    cardsCompletedSpan.textContent = pythonCards.length;
    modalOverlay.classList.add('show');
}

// Hide Modal
function hideModal() {
    modalOverlay.classList.remove('show');
}

// Restart App
function restartApp() {
    currentCardIndex = 0;
    score = 0;
    hideModal();
    updateUI();
}

// Hide Instructions After Delay
function hideInstructionsAfterDelay() {
    setTimeout(() => {
        swipeInstructions.classList.add('hidden');
    }, 5000);
}

// Event Listeners
prevBtn.addEventListener('click', goToPrevCard);
nextBtn.addEventListener('click', goToNextCard);
restartBtn.addEventListener('click', restartApp);

// Touch Events
cardContainer.addEventListener('touchstart', handleTouchStart, { passive: false });
cardContainer.addEventListener('touchmove', handleTouchMove, { passive: false });
cardContainer.addEventListener('touchend', handleTouchEnd, { passive: false });

// Mouse Events
cardContainer.addEventListener('mousedown', handleMouseDown);
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', handleMouseUp);

// Keyboard Events
document.addEventListener('keydown', handleKeyPress);

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);

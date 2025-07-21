// Fixed positions for each plant (adjust as needed)
const plantPositions = {
  plant1: { left: '427px', top: '385px' },
  plant2: { left: '932px', top: '567px' },
  plant3: { left: '278px', top: '42px' },
  plant4: { left: '865px', top: '98px' },
  plant5: { left: '1343px', bottom: '282px' },
  plant6: { left: '0px', top: '423px' }

  // Add positions for all your plants
};

function dragElement(element) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  element.onpointerdown = function(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
    element.style.zIndex = 1000;
  };

  function elementDrag(e) {
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    const wrapper = document.getElementById('wrapper');
    const wrapperRect = wrapper.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    let newTop = element.offsetTop - pos2;
    let newLeft = element.offsetLeft - pos1;

    newTop = Math.max(0, Math.min(newTop, wrapperRect.height - elementRect.height));
    newLeft = Math.max(0, Math.min(newLeft, wrapperRect.width - elementRect.width));

    element.style.top = `${newTop}px`;
    element.style.left = `${newLeft}px`;
  }

  function stopElementDrag() {
    document.onpointerup = null;
    document.onpointermove = null;
    element.style.zIndex = '';
  }
}

// Initialize plants with fixed positions
document.querySelectorAll('.plant').forEach(plant => {
  const plantId = plant.id;
  if (plantPositions[plantId]) {
    plant.style.position = 'absolute';
    plant.style.left = plantPositions[plantId].left;
    plant.style.top = plantPositions[plantId].top;
  }
  dragElement(plant);
});

// For plant holders if needed
document.querySelectorAll('.plant-holder').forEach(holder => {
  holder.style.position = 'absolute';
  dragElement(holder);
});
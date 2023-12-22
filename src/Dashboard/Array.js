import React, { useState } from 'react';

const ArrayVisualizer = () => {
  const [array, setArray] = useState([]);
  const [inputArray, setInputArray] = useState('');

  const generateRandomArray = () => {
    const newArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
    setArray(newArray);
  };

  const handleInputChange = (e) => {
    setInputArray(e.target.value);
  };

  const handleInputSubmit = () => {
    const newArray = inputArray.split(',').map(Number);
    setArray(newArray);
  };

  const selectionSort = () => {
    const newArray = [...array];
    for (let i = 0; i < newArray.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < newArray.length; j++) {
        if (newArray[j] < newArray[minIndex]) {
          minIndex = j;
        }
      }
      // Swap
      const temp = newArray[i];
      newArray[i] = newArray[minIndex];
      newArray[minIndex] = temp;
      // Set a delay to visualize the sorting process (optional)
      setTimeout(() => setArray([...newArray]), (i + 1) * 1000);
    }
  };

  const bubbleSort = () => {
    const newArray = [...array];
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < newArray.length - 1; i++) {
        if (newArray[i] > newArray[i + 1]) {
          // Swap
          const temp = newArray[i];
          newArray[i] = newArray[i + 1];
          newArray[i + 1] = temp;
          swapped = true;
          // Set a delay to visualize the sorting process (optional)
          setTimeout(() => setArray([...newArray]), (i + 1) * 1000);
        }
      }
    } while (swapped);
  };

  const insertionSort = () => {
    const newArray = [...array];
    for (let i = 1; i < newArray.length; i++) {
      const key = newArray[i];
      let j = i - 1;
      while (j >= 0 && newArray[j] > key) {
        newArray[j + 1] = newArray[j];
        j = j - 1;
      }
      newArray[j + 1] = key;
      // Set a delay to visualize the sorting process (optional)
      setTimeout(() => setArray([...newArray]), (i + 1) * 1000);
    }
  };

  const quickSort = () => {
    const newArray = [...array];

    const partition = (arr, low, high) => {
      const pivot = arr[high];
      let i = low - 1;
      for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
          i++;
          // Swap
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
      // Swap
      const temp = arr[i + 1];
      arr[i + 1] = arr[high];
      arr[high] = temp;
      return i + 1;
    };

    const quickSortHelper = (arr, low, high) => {
      if (low < high) {
        const pi = partition(arr, low, high);
        // Set a delay to visualize the sorting process (optional)
        setTimeout(() => setArray([...arr]), 1000);
        quickSortHelper(arr, low, pi - 1);
        quickSortHelper(arr, pi + 1, high);
      }
    };

    quickSortHelper(newArray, 0, newArray.length - 1);
  };

  const mergeSort = () => {
    const newArray = [...array];

    const merge = (arr, l, m, r) => {
      const n1 = m - l + 1;
      const n2 = r - m;

      const L = new Array(n1);
      const R = new Array(n2);

      for (let i = 0; i < n1; i++) L[i] = arr[l + i];
      for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

      let i = 0;
      let j = 0;
      let k = l;

      while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
          arr[k] = L[i];
          i++;
        } else {
          arr[k] = R[j];
          j++;
        }
        k++;
      }

      while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
      }

      while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
      }
    };

    const mergeSortHelper = (arr, l, r) => {
      if (l < r) {
        const m = Math.floor((l + r) / 2);
        mergeSortHelper(arr, l, m);
        mergeSortHelper(arr, m + 1, r);
        merge(arr, l, m, r);
        // Set a delay to visualize the sorting process (optional)
        setTimeout(() => setArray([...arr]), 1000);
      }
    };

    mergeSortHelper(newArray, 0, newArray.length - 1);
  };

  const shellSort = () => {
    const newArray = [...array];
    const n = newArray.length;

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for (let i = gap; i < n; i++) {
        const temp = newArray[i];
        let j = i;

        while (j >= gap && newArray[j - gap] > temp) {
          newArray[j] = newArray[j - gap];
          j -= gap;
        }

        newArray[j] = temp;
        // Set a delay to visualize the sorting process (optional)
        setTimeout(() => setArray([...newArray]), 1000);
      }
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div>
        <label>
          Enter Array (comma-separated):
          <input type="text" value={inputArray} onChange={handleInputChange} />
        </label>
        <button onClick={handleInputSubmit}>Submit</button>
      </div>
      <h2>OR Generate Random Array</h2>
      <p>Click on below button</p>
      <button onClick={generateRandomArray}>Generate Random Array</button>
      <button onClick={selectionSort}>Selection Sort</button>
      <button onClick={bubbleSort}>Bubble Sort</button>
      <button onClick={insertionSort}>Insertion Sort</button>
      <button onClick={quickSort}>Quick Sort</button>
      <button onClick={mergeSort}>Merge Sort</button>
      <button onClick={shellSort}>Shell Sort</button>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {array.map((value, index) => (
          <div
            key={index}
            style={{
              height: `${value * 3}px`,
              width: '20px',
              backgroundColor: 'red',
              color: 'white',
              margin: '0 2px',
            }}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArrayVisualizer;

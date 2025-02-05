```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval within useEffect without cleanup
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }, []); // Empty dependency array means this runs only once on mount

  return <div>Count: {count}</div>;
}
```
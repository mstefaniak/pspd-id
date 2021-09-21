import './styles.css'

const Clock = () => {
  return (
    <div className="flex justify-center items-center pt-8">
      <ul className="hourTens"><li>0</li><li>1</li><li>2</li></ul>
      <ul className="hourOnes"><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li></ul>

      <ul className="minuteTens"><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li></ul>
      <ul className="minuteOnes"><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li></ul>

      <ul className="secondTens"><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li></ul>
      <ul className="secondOnes"><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li></ul>
    </div>
  )
}

export default Clock
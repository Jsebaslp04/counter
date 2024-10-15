import './Buttons.css'

function Buttons() {
    return (
        <container className="button_option">
            <div>
                <button class="increment">Increment</button>
            </div>
            <div>
                <button class="decrement">Decrement</button>
            </div>
            <div>
                <button class="reset">Reset</button>
            </div>
        </container>
    
    );
  }

  export { Buttons };
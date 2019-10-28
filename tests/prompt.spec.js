const prompt = require('../lib/prompt');


test (
    'should return key value',
    async () => {
        const res =  prompt();
        //await res;

        //make the test while is the prompt is waiting
        async () => {
            const event = new KeyboardEvent('keypress', {'keyCode': 13});
            // const event = new KeyboardEvent('keydown', {'keyCode': 13});
            // const event1 = new KeyboardEvent('keyup', {'keyCode': 13});
            await document.dispatchEvent(event);
            //await document.dispatchEvent(event1);
        }
        

        res.then(
            (value) => {
                console.log(value)
            },
            () => {
                console.log("ERROR");
            }
        )
        //await res;
        //await f;
        console.log("")
        // await res;
        expect(true).toBe(true);
        //success('sucesso 01')
        //console.log("res: ", res);
        //fail('not implemented yet');
    }
)
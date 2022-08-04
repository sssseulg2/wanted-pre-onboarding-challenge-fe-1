    const a = async() => {
        try {
            const res = await axios.post("http://localhost:8080/todos", {
                title: "할일b",
                content: "할일없다구요"
                },
                { headers: {
                    'Authorization': `Bearer ${token}`
                },
            });
            console.log(res)
            console.log(res.data.data)
            alert(res.data);
          } catch (error) {
            alert(error.response);
          }
    }


        const getTodos = async() => {
        try {
            const res = await axios.get("http://localhost:8080/todos", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            // console.log(res.data.data)
            setTodos(...res.data.data)
            console.log(todos)
        } catch(error) {
            console.log(error.response)
        }
    }

        let todos = useQuery(['todos'], async() => 
        await axios.get("http://localhost:8080/todos", {
            headers: { 'Authorization': `Bearer ${token}` }
        }).then((res) => {
            console.log(res.data.data)
            return res.data})
    );
    // console.log(data, status)
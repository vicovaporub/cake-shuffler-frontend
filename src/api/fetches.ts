export const fetchAllCakes = async (setCakes: Function) => {
  try {
    if (
      !process.env.NEXT_PUBLIC_API_URL ||
      !process.env.NEXT_PUBLIC_ALL_CAKES
    ) {
      throw new Error(
        "Environment variables NEXT_PUBLIC_API_URL or NEXT_PUBLIC_ALL_CAKES are not defined"
      );
    }
    const allTheCakesUrl =
      process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_ALL_CAKES;
    const response = await fetch(allTheCakesUrl);
    const data = await response.json();
    if (!response.ok) {
      alert(`Ainda não há bolos cadastrados!`);
    } else {
      setCakes(data);
    }
  } catch (error) {
    console.error(`there is an error: ${error}`);
  }
};

export const fetchSubmitCakeForm = async (formData: object) => {
  try {
    if (
      !process.env.NEXT_PUBLIC_API_URL ||
      !process.env.NEXT_PUBLIC_SUBMIT_CAKES
    ) {
      throw new Error(
        "Environment variables NEXT_PUBLIC_API_URL or NEXT_PUBLIC_SUBMIT_CAKES are not defined"
      );
    }

    const submitCakeUrl =
      process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_SUBMIT_CAKES;
    const response = await fetch(submitCakeUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(`here is the data: ${data}`);
      })
      .catch((err) => console.error(`there is an error: ${err}`));
  } catch (error) {
    console.error(`there is an error: ${error}`);
  }
};

export const fetchRandomCake = async (setRandomCake: Function) => {
  try {
    if (
      !process.env.NEXT_PUBLIC_API_URL ||
      !process.env.NEXT_PUBLIC_RANDOM_CAKE
    ) {
      throw new Error(
        "Environment variables NEXT_PUBLIC_API_URL or NEXT_PUBLIC_RANDOM_CAKE are not defined"
      );
    }
    const randomCakeUrl =
      process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_RANDOM_CAKE;
    const response = await fetch(randomCakeUrl);
    const data = await response.json();
    if (!response.ok) {
      alert(`Erro ao buscar bolo aleatório!`);
    } else {
      setRandomCake(data);
    }
  } catch (error) {
    console.error(`there is an error: ${error}`);
  }
};

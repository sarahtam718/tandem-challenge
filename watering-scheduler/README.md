# To Do List

## Step 1: Data Outputs

MVP

- find how many times to water [DONE]
- successfully employ npm package moment [DONE]
- find out on which specific date (day of the month & day of the week) waterings would occur based on start and end dates [DONE]
- add conditions [DONE]
  - remove weekends
  - return message if date is past 12 weeks

XTRA [Saturday]

- Group by date (for each date, show me plants to water)

## Step 2: Display

MVP

- Cards for each plant with dates of watering for the next 12 weeks
- Navbar/banner

XTRA

- Cards for each date, arranged in calendar
- Today-specific watering

## Purpose

This project improved my coding skills, helped me apply for an incredible apprenticeship opportunity, and acts as a plant-watering schedule for the good people at Tandem for 12 weeks starting December 16th.

## Parameters

The user can view which plants need watering on particular dates, based on JSON data regarding frequency of watering. Thankfully, Tandem sets wonderful work-boundaries for their employees, so there will be no watering dates on weekends (which only puts off a plant's watering by 1 day or so). It is possible to water all the plants in one day; all will be watered on the first day.

## Get Started

Use npm start in terminal from within 'watering-scheduler'

## Technology

React.js + moment.js package

## Future Development

- Ability to enter name or list of names to rotate sign ups to water
- Assign people certain plants to water and only show that plant & its dates to that user when they enter their name
- Add new plants & their schedules to the app
- Check off completed waterings (if not checked, that plant's name rolls over to the next day)

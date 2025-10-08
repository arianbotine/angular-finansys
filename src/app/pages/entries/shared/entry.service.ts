import { Injectable, Injector } from "@angular/core";

import { BaseResourceService } from "../../../shared/services/base-resource.service";
import { CategoryService } from "../../categories/shared/category.service";
import { Entry } from "./entry.model";

import { Observable } from "rxjs";
import { mergeMap, catchError, map } from "rxjs/operators";

import { format, parse, getMonth, getYear } from "date-fns";

@Injectable({
  providedIn: "root",
})
export class EntryService extends BaseResourceService<Entry> {
  constructor(
    protected override injector: Injector,
    protected categoryService: CategoryService
  ) {
    super("api/entries", injector, Entry.fromJson);
  }

  override create(entry: Entry): Observable<Entry> {
    return this.setCategoryAndSendToServer(entry, super.create.bind(this));
  }

  override update(entry: Entry): Observable<Entry> {
    return this.setCategoryAndSendToServer(entry, super.update.bind(this));
  }

  getByMonthAndYear(month: number, year: number): Observable<Entry[]> {
    return this.getAll().pipe(
      map((entries) => this.filterByMonthAndYear(entries, month, year))
    );
  }

  private setCategoryAndSendToServer(
    entry: Entry,
    sendFn: (entry: Entry) => Observable<Entry>
  ): Observable<Entry> {
    return this.categoryService.getById(entry.categoryId!).pipe(
      mergeMap((category) => {
        entry.category = category;
        return sendFn(entry);
      }),
      catchError(this.handleError)
    );
  }
  private filterByMonthAndYear(
    entries: Entry[],
    month: number,
    year: number
  ): Entry[] {
    return entries.filter((entry) => {
      if (!entry.date) return false;
      const entryDate = parse(entry.date, "dd/MM/yyyy", new Date());
      const monthMatches = getMonth(entryDate) + 1 === month;
      const yearMatches = getYear(entryDate) === year;

      return monthMatches && yearMatches;
    });
  }
}
